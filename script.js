document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("animateBtn");
  const message = document.getElementById("message");
  const themeToggleBtn = document.getElementById("themeToggleBtn");

  // Retrieve user preferences from localStorage
  const userAnimationPreference = localStorage.getItem("buttonAnimation");
  const userThemePreference = localStorage.getItem("theme");

  // Apply saved animation state
  if (userAnimationPreference === "true") {
    button.classList.add("animate");
  }

  // Apply saved theme
  if (userThemePreference === "dark") {
    document.body.classList.add("dark-theme");
  }

  // Add click event to trigger animation and display message
  button.addEventListener("click", () => {
    button.classList.toggle("animate");
    const isAnimated = button.classList.contains("animate");
    localStorage.setItem("buttonAnimation", isAnimated);

    // Update message
    message.textContent = isAnimated
      ? "Animation is active!"
      : "Animation is stopped!";
  });

  // Add click event to toggle theme
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  });
});