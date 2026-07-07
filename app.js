gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.15,
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  gsap.to(glow, {
    x: e.clientX - 160,
    y: e.clientY - 160,
    duration: 0.45,
    ease: "power2.out"
  });
});

gsap.from(".hero .eyebrow, .hero h1, .hero-text, .hero-buttons", {
  y: 70,
  opacity: 0,
  filter: "blur(12px)",
  duration: 1.1,
  stagger: 0.12,
  ease: "power4.out"
});

gsap.from(".project-hero .big-icon, .project-hero .eyebrow, .project-hero h1, .project-hero p, .project-hero .hero-buttons", {
  y: 70,
  opacity: 0,
  filter: "blur(12px)",
  duration: 1.1,
  stagger: 0.12,
  ease: "power4.out"
});

gsap.utils.toArray(".section, .project-detail, .footer").forEach((section) => {
  gsap.from(section, {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 82%"
    }
  });
});

document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(card, {
      rotationY: (x - rect.width / 2) / 24,
      rotationX: -(y - rect.height / 2) / 24,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });
});

document.querySelectorAll(".magnetic").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(button, {
      x: (x - rect.width / 2) * 0.22,
      y: (y - rect.height / 2) * 0.22,
      duration: 0.35,
      ease: "power2.out"
    });
  });

  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  });
});

ScrollTrigger.create({
  start: "top -80",
  onEnter: () => {
    gsap.to(".navbar", {
      scale: 0.96,
      background: "rgba(13,17,23,0.9)",
      duration: 0.4
    });
  },
  onLeaveBack: () => {
    gsap.to(".navbar", {
      scale: 1,
      background: "rgba(13,17,23,0.72)",
      duration: 0.4
    });
  }
});