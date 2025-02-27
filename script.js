document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageBox = document.getElementById("message");

    if (!name || !email || !password) {
        messageBox.innerText = "All fields are required!";
        messageBox.style.color = "yellow";
        return;
    }

    if (password.length < 6) {
        messageBox.innerText = "Password must be at least 6 characters!";
        messageBox.style.color = "red";
        return;
    }

    messageBox.innerText = "Signing up...";
    messageBox.style.color = "white";

    try {
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const result = await response.json();
        messageBox.innerText = result.message;
        messageBox.style.color = result.message.includes("successful") ? "green" : "red";
    } catch (error) {
        messageBox.innerText = "Signup failed!";
        messageBox.style.color = "red";
    }
});
