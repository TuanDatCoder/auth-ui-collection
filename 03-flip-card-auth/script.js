document.addEventListener("DOMContentLoaded", () => {
  console.log("Auth UI loaded!");

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
      themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Flip card functionality
  const flipToggle = document.getElementById('flipToggle');
  if (flipToggle) {
    flipToggle.addEventListener('change', () => {
      const flipCardInner = document.querySelector('.flip-card__inner');
      if (flipToggle.checked) {
        flipCardInner.style.transform = 'rotateY(180deg)';
      } else {
        flipCardInner.style.transform = 'rotateY(0deg)';
      }
    });
  }

  // Validate Register Form
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const pass = document.getElementById("password").value;
      const confirmPass = document.getElementById("confirmPassword").value;
      if (pass !== confirmPass) {
        alert("❌ Passwords do not match!");
        return;
      }
      alert("✅ Register form submitted successfully!");
    });
  }

  // Handle Login Form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;

      if (email === "tuandatdq03@gmail.com" && password === "Test@123") {
        localStorage.setItem("loggedIn", "true");
        alert("✅ Login thành công! Chuyển sang trang home...");
        window.location.href = "index.html";
      } else {
        alert("❌ Invalid email or password!");
      }
    });
  }

  // Handle Forgot Form
  const forgotForm = document.getElementById("forgotForm");
  if (forgotForm) {
    forgotForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("📩 Reset link has been sent to your email!");
    });
  }

  // Kiểm tra nếu chưa login mà vào thẳng home thì redirect
  if (window.location.pathname.includes("index.html")) {
    if (!localStorage.getItem("loggedIn")) {
      window.location.href = "login.html";
    }
  }
});

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}