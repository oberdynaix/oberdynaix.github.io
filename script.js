// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Simple hover effect for app cards on pointer devices
const appCards = document.querySelectorAll(".app-card");
appCards.forEach((card) => {
  card.addEventListener("pointerenter", () => {
    card.style.transform = "translateY(-4px)";
    card.style.boxShadow = "0 24px 50px rgba(15, 23, 42, 1)";
  });
  card.addEventListener("pointerleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 18px 40px rgba(15, 23, 42, 0.95)";
  });
});
