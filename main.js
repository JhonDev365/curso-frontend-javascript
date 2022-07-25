const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navBarEmail.addEventListener('click', toggleNavBarEmail);

function toggleNavBarEmail() {
    desktopMenu.classList.toggle('inactive');
}