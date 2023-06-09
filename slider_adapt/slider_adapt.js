
////slide_list active
//function OnSlide(entry) {
//  entry.forEach(change => {
//    if (change.isIntersecting) {
//      change.target.classList.add('slide_active');
//    } else {
//    change.target.classList.remove('slide_active');
//    }
//  });
//}
//
//
//let options = { threshold: [1] };
//let observer = new IntersectionObserver(OnSlide, options);
//var elements = document.querySelectorAll('.idSlide');
//for (let elm of elements) {
//  observer.observe(elm);
//}
//var slideIndex = 1;
//showSlides(slideIndex);
//// Next/previous controls
//function clickSlides(n) {
//  showSlides(slideIndex += n);
//}
//function showSlides(n) {
//  var i;
//  var slides = document.querySelectorAll(" .slider__img");
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";
//  }
//  slides[slideIndex-1].style.display = "flex";
//}

// function slide


//var pagInd2 = 1;
//
//pagination2(pagInd2);
//
//function clickPag(n, container) {
//    if (container === 'container2') {
//      pagination2(pagInd2 += n);
//      if (count >= sliderItem.length) {
//        count = 0;
//      }
//      if (count < 0) {
//        count = sliderItem.length - 1;
//      }
//      rollSlider();
//    }
//}

//const sliderLine = document.querySelector('.container2');
//const sliderItem = document.querySelectorAll('.js_item_2');
//var pagInd2 = 0;
//pagination2(pagInd2);
//function clickPag(n, container) {
//    if (container === 'container2') {
//    pagInd2+=n;
//    if (pagInd2 >= sliderItem.length) {
//        pagInd2 = 0;
//    }
//    if (pagInd2 < 0) {
//        pagInd2 = sliderItem.length - 1;
//    }
//    rollSlider();
//    }
//}
//function pagination2() {
//  console.log('resize');
//  height = 200;
//  sliderLine.style.height = height * 2 + 'px';
//
//  sliderItem.forEach(item => {
//    item.style.height = height + 'px';
//  });
//  rollSlider();
//}
//window.addEventListener('resize', pagination2);
//pagination2();
//function rollSlider() {
//  sliderLine.style.transform = 'translateY(-' + pagInd2 * height + 'px)';
//}


var pagInd2 = 1;
var pagInd3 = 1;
pagination2(pagInd2);
pagination3(pagInd3);

function clickPag(n, container) {
    if (container === 'container1') {
      pagination1(pagInd1 += n, n);
      } else       if (container === 'container2') {
        pagination2(pagInd2 += n, n);
      } else if (container === 'container3') {
        pagination3(pagInd3 += n, n);
      }
}

//pagination 2 for reviews post
  function pagination2(n,step=0) {
    container2 = document.querySelector('.container2');
    var width = container2.offsetWidth;
    console.log(width);
    var jsItem2 = document.querySelectorAll(".js_item_2");
    if (pagInd2 < jsItem2.length && pagInd2 >= 0) {
        var end = jsItem2.length -1;
        var len = jsItem2.length;
        for (i1 = 0; i1 < jsItem2.length; i1++) {
            jsItem2[i1].style.display = "none";
        }
        for (var i2 = n; i2 <= end; i2++) {
            var idx = i2 % len;
            jsItem2[idx].style.display = "flex";
        }
    }
    else {
        pagInd2 -= step;
    }
}


// pagination 3 for video presentaion
  function pagination3(n,step=0) {
    container3 = document.querySelector('.container3');
    var width = container3.offsetWidth;
    console.log(width);
    var jsItem3 = document.querySelectorAll(".js_item_3");
    if (pagInd3 < jsItem3.length && pagInd3 >= 0) {
        var end = jsItem3.length -1;
        var len = jsItem3.length;
        for (i1 = 0; i1 < jsItem3.length; i1++) {
            jsItem3[i1].style.display = "none";
        }
        for (var i2 = n; i2 <= end; i2++) {
            var idx = i2 % len;
            jsItem3[idx].style.display = "flex";
        }
    }
    else {
        pagInd3 -= step;
    }
}