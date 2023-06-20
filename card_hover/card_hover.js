function createSliderPagination(containerSelector) {
  let offset = 0;
  const sliderLine = document.querySelector(`${containerSelector} .slider_line`);
  const wrapCard = document.querySelectorAll(`${containerSelector} .wrap_card`);
  const slideCount = wrapCard.length;

  updateCardStyles();

  function pagination(n) {
    const wrapCardWidth = wrapCard[0].offsetWidth;
    offset += wrapCardWidth * n;

    if (offset < 0) {
      offset = 0; // Остановить в обратную сторону
    } else if (offset > (slideCount - 1) * wrapCardWidth) {
      offset = (slideCount - 1) * wrapCardWidth; // Остановить на последней карточке
    }

    sliderLine.style.transform = `translateX(${-offset}px)`;
    updateCardStyles();
  }

  function updateCardStyles() {
    const activeCardIndex = Math.abs(offset / wrapCard[0].offsetWidth);

    for (let i = 0; i < slideCount; i++) {
      const wrapCardElement = wrapCard[i];
      const card = wrapCardElement.querySelector('.wrap_card__card');
      const hiddenCard = wrapCardElement.querySelector('.wrap_card__hidden-card');

      if (i === activeCardIndex) {
        card.classList.add('card__active');
        hiddenCard.classList.add('hidden_card__active');
        wrapCardElement.style.marginLeft = '10px';
        wrapCardElement.style.marginRight = '10px';
      } else {
        card.classList.remove('card__active');
        hiddenCard.classList.remove('hidden_card__active');
        wrapCardElement.style.marginLeft = '0px';
        wrapCardElement.style.marginRight = '0px';
      }
    }
  }

  return pagination;
}

const pagination1 = createSliderPagination('.container1');
const pagination2 = createSliderPagination('.container2');
const pagination3 = createSliderPagination('.container3');
const pagination4 = createSliderPagination('.container4');
const pagination5 = createSliderPagination('.container5');

function clickPag(n, container) {
  if (container === 'container1') {
    pagination1(n);
  } else if (container === 'container2') {
    pagination2(n);
  } else if (container === 'container3') {
    pagination3(n);
  } else if (container === 'container4') {
    pagination4(n);
  } else if (container === 'container5') {
    pagination5(n);
  }
}