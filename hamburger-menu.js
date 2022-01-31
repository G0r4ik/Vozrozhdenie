const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.header__nav');
const header = document.querySelector('.header');

const closeEl = [...document.body.children].splice(1);

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('header__nav_visible');
  header.classList.toggle('header_white');
});


closeEl.forEach((node) => {
  node.addEventListener('click', deleteHeader);
  node.addEventListener('wheel', deleteHeader);
  node.addEventListener('touchstart', deleteHeader);
});

function deleteHeader(e) {
  e.stopPropogation;
  navbar.classList.remove('header__nav_visible');
  header.classList.remove('header_white');
}
