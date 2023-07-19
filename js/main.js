
import Card from './card.js'
// создаем поле
function newGame(container, cardsCount) {
  let cardsNumberArray = [],
    cardsArray = [],
    firstCard = null,
    secondCard = null
  for(let i = 1; i <= cardsCount / 2; i++) {
    // для того чтобы были пары карточек, дважды добавляем
      cardsNumberArray.push(i)
      cardsNumberArray.push(i)
  }

    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5)

  for (const cardNumber of cardsNumberArray) {
    cardsArray.push(new Card(container, cardNumber, flip))
  }
// логика
  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number != secondCard.number) {
        firstCard.open = false
        secondCard.open = false
        firstCard = null
        secondCard = null
      }
    }

    if(firstCard == null) {
      firstCard = card
    } else {
      if (secondCard == null) {
        secondCard = card
      }
    }

    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number == secondCard.number) {
        firstCard.success = true
        secondCard.success = true
        firstCard = null
        secondCard = null
      }
    }
    const modal = document.querySelector('.overlay');
    const again = document.querySelector('.btn__again');

    // сброс игры
      if(document.querySelectorAll('.success').length == cardsNumberArray.length) {
        modal.classList.add('show');
        container.innerHTML = ''
        cardsNumberArray = []
        cardsArray = []
        firstCard = null
        secondCard = null
        blockTime.innerHTML = 60
      again.addEventListener('click', () => {
        modal.classList.remove('show');

      })
      newGame(container, cardsCount)
      }

  }
}
// таймер
const blockTime = document.querySelector('.time');
let button = document.getElementById("button");
let interval;

blockTime.innerHTML = 60;
document.getElementById('button').addEventListener('click', () => {

clearInterval(interval); // чистим, чтобы не сбивался интервал секунда при повторном нажатии кнопки
interval = setInterval(substractTime, 1000);
newGame(document.getElementById('game'), 16)
});

function substractTime() {
if (blockTime.innerHTML > 0) {
    blockTime.innerHTML--;
} else {
  clearInterval(interval);
  alert('Время вышло...')

}

}

// newGame(document.getElementById('game'), 16)
