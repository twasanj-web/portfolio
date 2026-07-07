const cards = document.querySelectorAll(
  ".project-card, .timeline div, .tools div, article"
);

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, #0b63ce55, #06152a 45%)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "linear-gradient(145deg, #06152a, #020813)";
  });
});