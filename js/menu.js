var hamburgerBtn = document.querySelector('#hamburgerBtn');
var closeBtn = document.querySelector('#closeBtn');
var mobileMenu = document.querySelector('#mobileMenu');

function openMenu() {
    mobileMenu.classList.add('open');
}

function closeMenu() {
    mobileMenu.classList.remove('open');
}

hamburgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

mobileMenu.addEventListener('click', function(event) {
    if (event.target === mobileMenu) {
        closeMenu();
    }
});
