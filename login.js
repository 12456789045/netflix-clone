document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = document.getElementById("email").value.trim();
      const passwordInput = document.getElementById("password").value.trim();
      const errorText = document.getElementById("error");

      // Predefined login credentials
      const validEmail = "hrishikesh.221303@srttc.ac.in";
      const validPassword = "Hrishikesh@14";

      if (emailInput === validEmail && passwordInput === validPassword) {
        // Redirect to index page
        window.location.href = "index.html";
      } else {
        errorText.textContent = "Invalid email or password.";
      }
    });
  }
});
