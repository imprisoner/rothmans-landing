const anchors = ['title', 'cases', 'service', 'contacts']

const menuSelector = ".main-header__menu"
const buttonSelector = ".main-header__button"
const buttonActiveClass="menu__button--pressed"

const menu = document.querySelector(menuSelector)
const menuButtons = menu.querySelectorAll(buttonSelector)

const scrollPoints = {}

anchors.forEach(anchor => {
  scrollPoints[anchor] = document.querySelector(`#${anchor}`).offsetTop
})

export default function headerMenu() {

  let current = null

  document.addEventListener('scroll', (e) => {
    anchors.forEach(anchor => {
      if (window.scrollY >= scrollPoints[anchor]) {
        current = anchor
      }      
    })

    menuButtons.forEach(button => {
      button.classList.remove(buttonActiveClass)
      
      if(button.href.includes(current)) {
        button.classList.add(buttonActiveClass)
      }
    })
  })
}