// A hamburger menu
const hamburger = document.querySelector('.hamburger');
const navBurger = document.querySelector('.ulBurger');

hamburger.addEventListener('click', function(event) {
    event.preventDefault();
    navBurger.classList.toggle('active');
});