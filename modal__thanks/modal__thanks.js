//MODAL WINDOW CALLBACK
function ThanksForm() {
    document.querySelector('.modal_thanks').classList.add('modal_thanks__active');
    event.preventDefault();
};

function CloseThanksForm() {
    document.querySelector('.modal_thanks').classList.remove('modal_thanks__active');
    event.preventDefault();
}