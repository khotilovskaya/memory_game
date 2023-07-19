// шаблон
export default class Card {
  // _card
  _open = false
  _success = false
  //  вызывается сразу при создании классов
  constructor(container, number, action) {
    this.card = document.createElement('div')
    this.card.classList.add('card')
    this.card.textContent = number
    this.number = number

    // в стрелочной функции This родительский элемент
    this.card.addEventListener('click', () => {
      if (this.open == false && this.success == false) {
        this.open = true
        // передастся вся карточка со всеми свойствами
        action(this)
      }
    })
    container.append(this.card)
  }

  set open(value) {
    this._open = value
    value ? this.card.classList.add('open') : this.card.classList.remove('open')
  }
  get open() {
    return this._open
  }
  set success(value) {
    this._success = value
    value ? this.card.classList.add('success') : this.card.classList.remove('success')
  }
  get success() {
    return this._success
  }

}

function flip(card) {
  console.log(card);
}





