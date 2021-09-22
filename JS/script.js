window.onscroll = function showHeader() {
    let header = document.querySelector('.header-body');
    if(window.pageYOffset > 700) {
        header.classList.add('menu-fixed');
    } else {
        header.classList.remove('menu-fixed');
    }
}