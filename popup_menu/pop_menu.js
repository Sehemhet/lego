let langOpen = document.querySelector('.item_lang')
let langOpenActive = document.querySelector('.item_lang__active')
let langLink = document.querySelectorAll('.lang_link')
let langLinkActive = document.querySelector('.lang_link__active')
let link = document.querySelectorAll('.item_link')
langOpen.addEventListener('click', function(){
    langOpen.classList.toggle('item_lang__active')
});

//не работает ссылка, но работают стили
var linkList = document.querySelector(".item_lang");
var linkItem = document.querySelectorAll(".lang_link");

linkList.addEventListener("click", function(event) {
  event.preventDefault();
  for(var i = 0; i < linkItem.length; i++) {
    linkItem[i].classList.toggle("lang_link__active");
  }
});


//работа разметки
btn = document.querySelector("#button")
link = document.querySelector("#test_css")
btn.oninput = function () {
    if (btn.checked) {
        link.removeAttribute('disabled');
    } else {
        link.setAttribute('disabled',true);
    }
}



//link.addEventListener('click', function(){
//    link.classList.remove('lang_link')
//})

//btn = document.querySelector(".lang_link")
//link = document.querySelector(".lang_link__active")
//btn.oninput = function () {
//    if (btn.checked) {
//        link.removeAttribute('disabled');
//    } else {
//        link.setAttribute('disabled',true);
//    }
//}



//langOpen.addEventListener('click', function(){
//    langLink.classList.add('lang_link__active')
//});

//btn = document.querySelector(".wrap_menu_lang")
//link = document.querySelector(".lang_link")
//btn.oninput = function () {
//    if (btn.checked) {
//        link.removeAttribute('disabled');
//    } else {
//        link.setAttribute('disabled',false);
//    }
//}


//const buttons = document.querySelectorAll('.lang_link')
//for (let button of buttons) {
//  langOpen.addEventListener('click', () => {
//    const activeElement = button.querySelector('.lang_link')
//    if (!activeElement) {
//      button.querySelector('.lang_link').classList.toggle('lang_link__active')
//    }
//  })
//}



