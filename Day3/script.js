const form = document.getElementById("userForm");
const jsonDisp = document.getElementById("jsonDisp");
const themeToggle = document.getElementById("themeToggle");
let jsonData = [];

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Light Theme"
    : "Switch to Dark Theme";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearErrors();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const hobbies = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((cb) => cb.value);
  const country = document.getElementById("country").value;

  let isValid = true;

  // Validation
  if (name.length < 2 || name.length > 50) {
    showError("nameError", "Name must be between 2 and 50 characters.");
    isValid = false;
  }
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    showError("emailError", "Please enter a valid email address.");
    isValid = false;
  }
  if (isNaN(age) || age < 1 || age > 120) {
    showError("ageError", "Age must be between 1 and 120.");
    isValid = false;
  }
  if (!dob) {
    showError("dobError", "Date of Birth is required.");
    isValid = false;
  } else if (new Date(dob) > new Date()) {
    showError("dobError", "Date of Birth cannot be in the future.");
    isValid = false;
  }
  if (!gender) {
    showError("genderError", "Please select your gender.");
    isValid = false;
  }
  if (hobbies.length === 0) {
    showError("hobbiesError", "Please select at least one hobby.");
    isValid = false;
  }
  if (!country) {
    showError("countryError", "Please select a country.");
    isValid = false;
  }

  if (!isValid) return;

  const formData = {
    name,
    email,
    age,
    dob,
    gender: gender.value,
    hobbies,
    country,
  };

  jsonData.push(formData);
  jsonDisp.textContent = JSON.stringify(jsonData, null, 4);

  form.reset();
});

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
}
