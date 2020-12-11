const Munarbek = () => {
  const p = document.querySelectorAll('.product__description');
  p.forEach((item, index) => {
    const arrayOfLetters = item.textContent.split('');
    if (arrayOfLetters.length > 50) {
      p[index].style.overflow = 'hidden';
      item.addEventListener('click', () => {
        p[index].classList.toggle('is-active');
      });
    }
  });

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

export default Munarbek;
