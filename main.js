// Advantages

const advantagesCards = document.querySelectorAll('.advantages__card');

function advantagesToggle(element) {
  if (window.innerWidth > 768) return;
  let mark = element.children[0].children[1].children[2];
  mark.classList.toggle('advantages__check-mark_active');
  let hiddenText = advatagesFindHiddenText(
    mark.getAttribute('data-advantages-id-btn')
  );
  hiddenText.classList.toggle('advantages__text_open');
  hiddenText.classList.toggle('advantages__text');
}

let hiddenTexts = document.querySelectorAll('.advantages__text');
function advatagesFindHiddenText(id) {
  return [...hiddenTexts].find((text) => {
    return text.getAttribute('data-advantages-id') == id ? id : null;
  });
}

advantagesCards.forEach((card) => {
  card.addEventListener('click', () => advantagesToggle(card));
  card.addEventListener('keydown', (e) =>
    e.keyCode == 13 ? advantagesToggle(card) : null
  );
});

// Progress

const progressButtons = document.querySelectorAll('.progress__btn');
progressButtons.forEach((element) => {
  element.addEventListener('click', () => {
    progressButtons.forEach((element2) => {
      element2.classList.remove('progress__btn_active');
    });
    element.classList.add('progress__btn_active');
  });
});

// apartment

const apartmentsButtons = document.querySelectorAll('.apartments__btn');
const apartmentsDivsText = document.querySelectorAll('.apartment__div-text');

apartmentsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    apartmentsButtons.forEach((el) => {
      el.classList.remove('apartments__btn_active');
    });

    apartmentsDivsText.forEach((div) => {
      if (
        div
          .getAttribute('id')
          .includes(button.getAttribute('data-apartment-id'))
      ) {
        div.classList.add('apartment__div-text_acitve');
      } else {
        div.classList.remove('apartment__div-text_acitve');
      }
    });

    button.classList.add('apartments__btn_active');
  });
});

// Feedback

const feedbackItems = document.querySelectorAll('.feedback__item');
feedbackItems.forEach((element) => {
  element.addEventListener('click', () => {
    feedbackItems.forEach((element2) => {
      element2.classList.remove('feedback__item_active');
    });
    element.classList.add('feedback__item_active');
  });
});

// Footer

document.querySelector('#btn-top').addEventListener('click', () => {
  function smoothscroll() {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo(0, currentScroll - currentScroll / 50);
    }
  }
  smoothscroll();
});

// document
//   .querySelector('#btn-top')
//   .addEventListener('click', () =>
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   );
