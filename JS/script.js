window.onscroll = function showHeader() {
    let header = document.querySelector('.header');
    if(window.pageYOffset > 200) {
        header.classList.add('menu-fixed');
    } else {
        header.classList.remove('menu-fixed');
    }
    console.log(header);
}


