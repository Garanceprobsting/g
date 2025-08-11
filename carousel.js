document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  const scrollAmount = 300; // pixels à défiler par clic

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
