const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const heroArt = document.querySelector('.hero-art');

if (heroArt && !motionQuery.matches && window.matchMedia('(pointer: fine)').matches) {
  heroArt.addEventListener('pointermove', (event) => {
    const box = heroArt.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    heroArt.style.transform = `rotateY(${x * 5}deg) rotateX(${y * -5}deg)`;
  });

  heroArt.addEventListener('pointerleave', () => {
    heroArt.style.transform = '';
  });
}

if (!motionQuery.matches && window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('.feature').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const box = card.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 3}deg) rotateX(${y * -3}deg) translateY(-5px)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}
