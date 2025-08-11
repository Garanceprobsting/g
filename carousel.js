const carousel = document.querySelector('.carousel');
const btnLeft = document.getElementById('prev');
const btnRight = document.getElementById('next');
const scrollAmount = 300;

btnLeft.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

