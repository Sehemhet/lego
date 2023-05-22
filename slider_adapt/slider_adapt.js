
//slide_list active
function OnSlide(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('slide_active');
    } else {
    change.target.classList.remove('slide_active');
    }
  });
}


let options = { threshold: [1] };
let observer = new IntersectionObserver(OnSlide, options);
var elements = document.querySelectorAll('.idSlide');
for (let elm of elements) {
  observer.observe(elm);
}
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function clickSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".slide_active .slider__img");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}

//// function slide
//const images = document.querySelectorAll('.slider__img'); //here was slider-line
//const sliderLine = document.querySelector('.slider-line'); //here wa slider__img
//let count = 0;
//let width;
//function init() {
//    console.log('resize');
//    width = document.querySelector('.slider').offsetWidth; // offsetWidth способ узнать ширину блока here was .slider
//    sliderLine.style.width = width*images.length + 'px'; // задаем ширину обвертки равную колличеству элементов
//    images.forEach(item => {
//        item.style.width = width + 'px'; // перебираем все картинки'
//        item.style.height = 'auto';
//    });
//    rollSlider();// добавляем функцию в инит для перемаштабирования картинки до полной обвертки, без видимости других слайдов
//}
//window.addEventListener('resize', init); // добавляем событие изменение маштаба слайда при изменении ширины экрана а не перезагрузки страницы
//init();
//document.querySelector('.slider-prev').addEventListener('click', function () {
//    count--;
//    if (count < 0) {
//        count = images.length -1;
//    }
//    rollSlider();
//});
//document.querySelector('.slider-next').addEventListener('click', function () {
//    count++;
//    if (count >= images.length) {
//        count = 0;
//    }
//    rollSlider();
//});
//function rollSlider() {
//    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
//}

