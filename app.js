let currentSlide = 0;
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  function nextSlide() {
    currentSlide = (currentSlide + 1) % dots.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + dots.length) % dots.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Auto slide every 3 seconds