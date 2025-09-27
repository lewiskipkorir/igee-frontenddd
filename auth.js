document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const res = await fetch("https://igee-1.onrender.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      alert(data.message);
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const res = await fetch("https://igee-1.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.success) {
        alert("Login success!");
        window.location.href = "feed.html";
      } else {
        alert(data.message);
      }
    });
  }
});
