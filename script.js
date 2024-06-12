const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('ul');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('show');
});
