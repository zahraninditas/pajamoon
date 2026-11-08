const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// SIZE CHART MODAL

const sizeButton = document.querySelector('[data-modal="size-modal"]');
const sizeModal = document.getElementById("size-modal");
const closeButton = sizeModal.querySelector(".modal-close");

// Open modal
sizeButton.addEventListener("click", () => {
  sizeModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close modal
closeButton.addEventListener("click", () => {
  sizeModal.classList.remove("active");
  document.body.style.overflow = "";
});

// Close when clicking outside
sizeModal.addEventListener("click", (event) => {
  if (event.target === sizeModal) {
    sizeModal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Close with ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    sizeModal.classList.remove("active");
    document.body.style.overflow = "";
  }
});
