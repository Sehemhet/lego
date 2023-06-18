let offset = 0;
const sliderLine = document.querySelector('.slider_line');
const wrapCard = document.querySelectorAll('.wrap_card');
const WwrapCard = document.querySelector('.wrap_card').offsetWidth;
openCard();
function widtnSlider() {
    let Wslider = document.querySelector('.slider').offsetWidth; // Получение ширины блока .slider
    const marginLeft = (Wslider - WwrapCard) / 2; // Рассчитать отступ слева для центрирования
    sliderLine.style.marginLeft = marginLeft + 'px'; // Применить отступ слева
}
widtnSlider();
window.addEventListener('resize', widtnSlider);
document.querySelector('.pag_next').addEventListener('click', function () {
    offset += WwrapCard;
    if (offset > (wrapCard.length - 1) * WwrapCard) {
        offset = (wrapCard.length - 1) * WwrapCard;
    }
    sliderLine.style.left = -offset + 'px';
    openCard();
});
document.querySelector('.pag_prev').addEventListener('click', function () {
    offset -= WwrapCard;
    if (offset < 0) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    openCard();
});
function openCard() {
    const activeCardIndex = Math.abs(offset / WwrapCard); // Определение индекса активной карточки
    for (let i = 0; i < wrapCard.length; i++) {
        if (i === activeCardIndex) {
            wrapCard[i].querySelector('.wrap_card__card').classList.add('card__active');
            wrapCard[i].querySelector('.wrap_card__hidden-card').classList.add('hidden_card__active');
            wrapCard[i].style.marginLeft = '10px';
            wrapCard[i].style.marginRight = '10px';
        } else {
            wrapCard[i].querySelector('.wrap_card__card').classList.remove('card__active');
            wrapCard[i].querySelector('.wrap_card__hidden-card').classList.remove('hidden_card__active');
            wrapCard[i].style.marginLeft = '0px';
            wrapCard[i].style.marginRight = '0px';
        }
    }
}
function pagination1(n) {
    offset = WwrapCard * n;
    if (offset < WwrapCard) {
        offset = WwrapCard;
    } else if (offset > (wrapCard.length - 1) * WwrapCard) {
        offset = (wrapCard.length - 1) * WwrapCard;
    }
    sliderLine.style.left = -offset + 'px';
}
function clickPag(n, container) {
    if (container === 'container1') {
        pagination1(offset + n);
    }
}


//let cardOpen = document.querySelector('.wrap_card')
//let titleCard = document.querySelector('.card')
//let cardHidden = document.querySelector('.hidden_card')
//let cardOpenItem = document.querySelector('.card_active')
//let cardHiddenItem = document.querySelector('.hidden_card_active')
//let listCard = document.querySelector('.container_card')
//let wrapCardActive = document.querySelector('.wrap_card__active')


//var pagInd1 = 0;
//pagination1(pagInd1);
//
//function clickPag(n, container) {
//    if (container === 'container1') {
//      pagination1(pagInd1 += n);
//    }
//}

//Указанная карточка открывается и закрывается, только ПЕРВАЯ закрывается при нажатии на другую
//const buttons = document.querySelectorAll('.wrap_card')
//for (let button of buttons) {
//  button.addEventListener('click', () => {
//      button.querySelector('.card').classList.toggle('card_active')
//      button.querySelector('.hidden_card').classList.toggle('hidden_card_active')
//      button.querySelector('.wrap_card').classList.toggle('wrap_card__active')
//  })
//}


//let offset = 0;
//const sliderLine = document.querySelector('.slider_line');
//document.querySelector('.pag_next').addEventListener('click', function () {
//        offset += 320;
//        if (offset > 1600) {
//            offset = 1600;
//        }
//        sliderLine.style.left = -offset + 'px';
//        openCard();
//});
//
//document.querySelector('.pag_prev').addEventListener('click', function () {
//        offset -= 320;
//        if (offset < 0) {
//            offset = 0;
//        }
//        sliderLine.style.left = -offset + 'px';
//});









//
//  function pagination1(n,step=0) {
//    let offset = 0;
//    const sliderLine = document.querySelector('.slider_line');
//    ListCard = document.querySelector('.container1');
//    var width = ListCard.offsetWidth;
//    console.log(width);
//    var wrapCard = document.querySelectorAll(".container1 .wrap_card");
//
//    if (pagInd1 < wrapCard.length && pagInd1 >= 0) {
//        var end = wrapCard.length -1;
//        var len = wrapCard.length;
//        for (i1 = 0; i1 < len; i1++) {
//            wrapCard[i1].style.display = "none";
//            wrapCard[i1].querySelector('.wrap_card__card').classList.remove('card__active');
//            wrapCard[i1].querySelector('.wrap_card__hidden-card').classList.remove('hidden_card__active');
//        }
//        for (var i2 = n; i2 <= end; i2++) {
//            var idx = (i2 + len) % len;
//            wrapCard[idx].style.display = "block";
//        }
//        wrapCard[pagInd1].querySelector('.wrap_card__card').classList.add('card__active');
//        wrapCard[pagInd1].querySelector('.wrap_card__hidden-card').classList.add('hidden_card__active');
//    }
//    else {
//        pagInd1 -= step;
//    }
//}
