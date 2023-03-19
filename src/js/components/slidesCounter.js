const selectors = {
  current: ".slides-counter__current",
  total: ".slides-counter__total"
}

export default class SlidesCounter {
  constructor(counterSelector) {
    const counterElement = document.querySelector(counterSelector)

    this._current = counterElement.querySelector(selectors.current)
    this._total = counterElement.querySelector(selectors.total)
  }

  setCurrent(index) {
    this._current.innerText = parseNum(index + 1)
  }

  setTotal(length) {
    this._total.innerText = parseNum(length)
  }

  init(num) {
    this.setCurrent(0)
    this.setTotal(num)
  }
}

function parseNum(num) {
  return num > 9 ? `${num}` : `0${num}`
}