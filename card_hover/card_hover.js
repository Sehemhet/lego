let cardOpen = document.querySelector('.wrap_card')
let titleCard = document.querySelector('.card')
let cardHidden = document.querySelector('.hidden_card')
let cardOpenItem = document.querySelector('.card_active')
let cardHiddenItem = document.querySelector('.hidden_card_active')
let listCard = document.querySelector('.container_card')



//// работает только первый элемент
//cardOpen.addEventListener('click', function(){
//    titleCard.classList.toggle('card_active')
//    cardHidden.classList.toggle('hidden_card_active')
//});

////применяется только один стиль
//const links = document.querySelectorAll('.card');
//for (let link of links) {
//  link.addEventListener('click', () => {
//    let activeLink = document.querySelector('.card.card_active');
//    if (activeLink) {
//      activeLink.classList.remove('card_active');
//    }
//    link.classList.toggle('card_active');
//  })
//}

//Указанная карточка открывается и закрывается, только ПЕРВАЯ закрывается при нажатии на другую
const buttons = document.querySelectorAll('.wrap_card')
for (let button of buttons) {
  button.addEventListener('click', () => {
      button.querySelector('.card').classList.toggle('card_active')
      button.querySelector('.hidden_card').classList.toggle('hidden_card_active')
  })
}



