const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const pledgeForm = document.querySelector("#pledgeForm");
const thankYouMessage = document.querySelector("#thankYouMessage");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

pledgeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const actionText = document.querySelector("#actionText").value.trim();

  if (!name || !email || !actionText) {
    return;
  }

  pledgeForm.reset();
  thankYouMessage.hidden = false;
});
