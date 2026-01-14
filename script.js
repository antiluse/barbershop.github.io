function openMenu() {
    sideMenu.classList.add('open');
    overlay.classList.add('show');
}

function closeMenu() {
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
}

const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
