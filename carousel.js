document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  if (!carousel || !prevBtn || !nextBtn) return;

  // calcul propre de la largeur "une carte + gap"
  function getGap() {
    const gap = getComputedStyle(carousel).gap;
    return gap ? parseFloat(gap) : 16;
  }

  function scrollByCard(dir) {
    const card = carousel.querySelector('a');
    if (!card) return;
    const gap = getGap();
    const scrollAmount = card.offsetWidth + gap;
    carousel.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
  }

  prevBtn.addEventListener('click', () => scrollByCard(-1));
  nextBtn.addEventListener('click', () => scrollByCard(1));
});
