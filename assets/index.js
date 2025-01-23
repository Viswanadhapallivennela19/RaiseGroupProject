document
  .getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("reg-name").value;
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById(
      "reg-confirm-password"
    ).value;
    const email = document.getElementById("reg-email").value;
    const phone = document.getElementById("reg-phone").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      name,
      password,
      email,
      phone,
    };

    localStorage.setItem(email, JSON.stringify(userData));
    alert("Registration successful!");
  });
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const storedUserData = localStorage.getItem(email);

  if (storedUserData) {
    const userData = JSON.parse(storedUserData);

    if (userData.password == password) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      console.log(email, password);
      alert("Incorrect password!");
    }
  } else {
    alert("User not found! Please register first.");
  }
});
