const header = document.querySelector('.header-wrapper');

window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        header.classList.add('transparent');
    }else{
        header.classList.remove('transparent');
    }
});