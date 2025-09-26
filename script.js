gsap.registerPlugin(ScrollTrigger);

// Animate elements with .animate-in
document.querySelectorAll('.animate-in').forEach(el => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});

// Glitch effect on headings
document.querySelectorAll('.glitch-text').forEach(header => {
  ScrollTrigger.create({
    trigger: header,
    start: "top 80%",
    once: true,
    onEnter: () => {
      header.classList.add('glitch-active');
      setTimeout(() => header.classList.remove('glitch-active'), 500);
    }
  });
});
