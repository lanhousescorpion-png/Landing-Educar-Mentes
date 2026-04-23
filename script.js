const revealItems = document.querySelectorAll(
  ".section-heading, .surface, .solution-card, .timeline-item, .quote-surface, .contact-card, .trust-strip, .hero-copy, .hero-panel"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.transitionDelay = `${Math.min(index * 60, 280)}ms`;
  observer.observe(item);
});
