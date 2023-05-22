let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderImg = document.querySelector('.slider__img');
const sliderImgActive = document.querySelector('.slider__img-active');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 250;
    if (offset > 750) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 250;
    if (offset < 0) {
        offset = 750;
    }
    sliderLine.style.left = -offset + 'px';
});