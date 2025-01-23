const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
const carousel = document.querySelector('.carousel');

let index = 0;
prevButton.addEventListener('click',()=>{
    if( index === 0 ) return;
    index -= 1;
    carousel.style.transform = `translate3d(-${1240*index}px, 0, 0)`;
});
nextButton.addEventListener('click',()=>{
    if( index === 2 ) return;
    indext += 1;
    carousel.style.transform = `translate3d(-${1240*index}px, 0, 0)`;
});

