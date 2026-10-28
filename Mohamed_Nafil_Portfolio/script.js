const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const copyEmailButton = document.getElementById("copyEmail");
const copyStatus = document.getElementById("copyStatus");
copyEmailButton.addEventListener("click", async () => {
  const email = "mohamednafil890@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = "Email address copied.";
  } catch (error) {
    copyStatus.textContent = "Please copy this email manually: " + email;
  }
});
