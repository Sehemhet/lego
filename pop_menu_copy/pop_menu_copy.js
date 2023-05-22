let langOpen = document.querySelector('.empty_item_lang')
let langMenu = document.querySelector('.item_lang')
let langOpenRemove = document.querySelector('.empty_item_lang_none')
let langMenuActive = document.querySelector('.item_lang__active')
let langClose = document.querySelector('.lang')

langOpen.addEventListener('click', function(){
    langOpen.classList.toggle('empty_item_lang_none')
    langMenu.classList.toggle('item_lang__active')
})

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

////////
