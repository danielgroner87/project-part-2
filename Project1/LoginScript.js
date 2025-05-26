/*document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("login-name").value;
      const password = document.getElementById("login-password").value;
  
      const storedName = localStorage.getItem("userName");
      const storedPassword = localStorage.getItem("userPassword");
  
      if (!storedName || !storedPassword) {
        alert("No users are registered yet. Please sign up first or try again");
        window.location.href = "Login.html";
        return;
      }
  
      if (name !== storedName) {
        alert("User not found. Please try again or SignUp");
        window.location.href = "Login.html";
        return;
      }
  
      if (password === storedPassword) {
        alert("Login successful!");
        window.location.href = "Home.html";
      } else {
        alert("Incorrect password.");
      }
    });
  });*/

  document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("login-name").value;
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.name === name);

    if (!user) {
      alert("User not found. Please sign up first.");
      return;
    }

    if (user.password === password) {
      alert("Login successful!");
      window.location.href = "Home.html";
    } else {
      alert("Incorrect password.");
    }
  });
});

