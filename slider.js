//  Progress
const swiperProgressList = new Swiper('.progress__list', {
  breakpoints: {
    900: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerView: 2.5,
    },
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerView: 1.3,
    },
  },
});

const swiperProgress = new Swiper('.progress__slider', {
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        nextEl: '.progress__button-next',
        prevEl: '.progress__button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: '110px',
      },
    },
    768: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    360: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
  },
});

// Gallery

const swiperGallery = new Swiper('.gallery__slider', {
  loop: true,
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: true,
      loopedSlides: 2,
      watchSlidesVisibility: true,
    },
    360: {
      slidesPerView: 1.5,
      spaceBetween: 40,
      centeredSlides: true,
      loopedSlides: 2,
      watchSlidesVisibility: true,
    }
  },
});

// Feedback

const swiperFeedback = new Swiper('.feedback__slider', {
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 1.3, 
      spaceBetween: 20,
      centeredSlides: true,
      loopedSlides: 2,
      watchSlidesVisibility: true,
    },
    360: {
      slidesPerView: 1.2,
      spaceBetween: 20,
      centeredSlides: true,
      loopedSlides: 2,
      watchSlidesVisibility: true,
    }
  },
});
