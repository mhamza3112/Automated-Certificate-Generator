# Automated Certificate Generator

A full-stack Node.js based automation system that generates internship completion certificates in PDF format and sends them directly to the user’s email automatically.

---

## Project Overview

The Automated Certificate Generator is a real-world backend automation project designed to eliminate manual certificate creation and distribution.

Users enter their details through a simple web interface, and the system:
✔ Generates a professional PDF certificate  
✔ Stores it locally on the server  
✔ Sends it automatically via email  

This project demonstrates full-stack integration using Node.js, PDF generation, and email automation.

---

## Objective

✔ Automatically generate internship certificates in PDF format  
✔ Store generated certificates on server  
✔ Send certificates via email automatically  
✔ Provide simple frontend UI for input  
✔ Fully automate certificate issuance workflow  

---

## ⚙️ Tech Stack

### Backend:
- Node.js
- Express.js

### Libraries:
- pdf-lib (PDF generation)
- Nodemailer (Email service)
- dotenv (Environment variables)
- fs & path (File handling)

### Frontend:
- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 📁 Project Structure

certificate-system/
│
├── public/
│ ├── index.html
│ ├── script.js
│ ├── style.css
│
├── certificates/ (Generated PDFs stored here)
│
├── server.js (Backend logic)
├── .env (Sensitive config)
├── package.json


---

## How the System Works

### 1️⃣ User Input (Frontend)
User fills a form:
- Name
- Email
- Internship Domain
- Completion Date

---

### 2️⃣ API Request
Data is sent to backend via:

http://localhost:3000/generate

---

### 3️⃣ Backend Processing
Node.js server:
✔ Receives request  
✔ Generates PDF certificate using pdf-lib  
✔ Saves file in /certificates folder  

---

### 4️⃣ Email Automation
After PDF creation:
✔ Nodemailer connects to Gmail SMTP  
✔ Attaches PDF file  
✔ Sends email automatically to user  

---

### 5️⃣ Final Output
✔ Certificate generated  
✔ Stored locally  
✔ Sent via email successfully  

---

## 🌐 Server Details

- Local Server: http://localhost:3000  
- Backend: Express.js  
- API Endpoint: /generate  

---

## 📧 Email Configuration

To enable email functionality:

### Step 1: Enable 2-Step Verification
Google Account Security:
https://myaccount.google.com/security

### Step 2: Generate App Password
Create an App Password for Gmail (Mail service)

### Step 3: Add .env file

EMAIL=yourgmail@gmail.com  
PASSWORD=your_app_password  
PORT=3000  

---

## Output Example

### Terminal Output:
Email server ready  
Request received  
PDF saved  
Email sent  

---

### Email Output:
✔ Certificate received in inbox  
✔ PDF attached successfully  

---

## 🔗 Links Section

LinkedIn Profile:  
https://www.linkedin.com/in/m-hamza-se

LinkedIn Post:  
https://www.linkedin.com/posts/m-hamza-se_node-pdf-intern-ugcPost-7452426828159459328-Mxe8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFC1dRwBJw9Hjdk96lKLzScF6CQdWMYwQpo

---

## Key Features

✔ Fully automated certificate system  
✔ Real-time PDF generation  
✔ Instant email delivery  
✔ Simple and clean UI  
✔ Full backend integration  
✔ Internship-level real-world project  

---

## Learning Outcomes

✔ Node.js backend development  
✔ Express.js API handling  
✔ PDF generation (pdf-lib)  
✔ Email automation (Nodemailer)  
✔ File system handling  
✔ Full-stack integration  

---

## Future Improvements

✔ QR-based certificate verification system  
✔ Admin dashboard  
✔ Download certificate feature  
✔ Cloud deployment (Render / Railway)  
✔ Database integration (MongoDB)  

---

## Author

Muhammad Hamza  
Software Engineering Student  
Node.js Intern  
Cloud Computing Trainee  

---

## Connect With Me

If you have any feedback, collaboration ideas, or opportunities, feel free to connect with me:

Email: mhamza74472@gmail.com  
LinkedIn: https://www.linkedin.com/in/m-hamza-se

💡 Always open to learning, collaboration, and real-world development opportunities.

---

## 📌 Note

This project is built for internship submission and demonstrates real-world automation using backend technologies.
