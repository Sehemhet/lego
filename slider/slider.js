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


var slider = document.querySelector('.slider');
btn = document.querySelector("#button_slider")
link = document.querySelector("#slider_test_css")
btn.oninput = function () {
    if (btn.checked) {
        link.removeAttribute('disabled');
        slider.style.overflow = 'visible';
    } else {
        link.setAttribute('disabled',true);
        slider.style.overflow = 'hidden';

    }
}
