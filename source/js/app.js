//Select DOM items
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');
var menuNav = document.querySelector('.menu-nav');
var menuBranding = document.querySelector('.menu-branding');
var navItems = document.querySelectorAll('.nav-item');
//Set Initial State Of The Menu
var showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
    if(!showMenu) {
        console.log('bravo');
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(function(item) {
            item.classList.add('show');
        });
        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(function(item) {
            item.classList.remove('show');
        });
        showMenu = false;
    }
}
//Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('#contact .boxes .box1', {
    delay: 100,
    duration: 700,
    origin: 'left',
    distance: '1000px',
});
sr.reveal('#contact .boxes .box2', {
    delay: 0,
    duration: 1300,
    origin: 'bottom',
    distance: '8000px',
});
sr.reveal('#contact .boxes .box3', {
    delay: 400,
    duration: 700,
    origin: 'right',
    distance: '1000px',
});