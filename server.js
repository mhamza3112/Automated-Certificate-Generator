const express = require("express");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");
const { PDFDocument, StandardFonts } = require("pdf-lib");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

const folderPath = path.join(__dirname, "certificates");

// Ensure folder exists
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

/* ================= EMAIL SETUP ================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

// Verify email config
transporter.verify((error) => {
  if (error) {
    console.log("Email configuration failed:", error.message);
  } else {
    console.log("Email server is ready");
  }
});

/* ================= MAIN API ================= */
app.post("/generate", async (req, res) => {
  try {
    console.log("Request received:", req.body);

    const { name, email, domain, date } = req.body;

    if (!name || !email || !domain || !date) {
      return res.status(400).json({ message: "Missing fields" });
    }

    /* ================= CREATE PDF ================= */
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([800, 600]);

    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    page.drawText("INTERNSHIP COMPLETION CERTIFICATE", {
      x: 160,
      y: 500,
      size: 22,
      font
    });

    page.drawText(`Name: ${name}`, {
      x: 250,
      y: 400,
      size: 20,
      font
    });

    page.drawText(`Domain: ${domain}`, {
      x: 250,
      y: 350,
      size: 18,
      font
    });

    page.drawText(`Date: ${date}`, {
      x: 250,
      y: 300,
      size: 16,
      font
    });

    const pdfBytes = await pdfDoc.save();

    const fileName = `${name.replace(/\s+/g, "_")}.pdf`;
    const filePath = path.join(folderPath, fileName);

    fs.writeFileSync(filePath, pdfBytes);

    console.log("PDF created at:", filePath);

    /* ================= SEND EMAIL ================= */
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Internship Certificate",
      html: `
        <h3>Congratulations ${name}</h3>
        <p>Your internship certificate is attached.</p>
      `,
      attachments: [
        {
          filename: fileName,
          path: filePath
        }
      ]
    });

    console.log("Email sent:", info.messageId);

    res.json({ message: "Certificate generated and sent successfully" });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= START SERVER ================= */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});