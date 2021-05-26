const menuBtn = document.getElementById('menu-btn');
const menuNav = document.getElementById('menu-nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuNav.classList.add('open');
        menuOpen = !menuOpen
    } else {
        menuBtn.classList.remove('open');
        menuNav.classList.remove('open');
        menuOpen = !menuOpen
    }
})