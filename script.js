const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    domain: document.getElementById("domain").value,
    date: document.getElementById("date").value
  };

  try {
    const res = await fetch("/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    message.innerText = result.message;

  } catch (err) {
    message.innerText = "Request failed";
    console.log(err);
  }
});