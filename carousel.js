const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const scrollAmount = 290; // largeur image + marge

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
