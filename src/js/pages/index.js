import Swiper, { Navigation } from 'swiper'
import initMenu from "../components/menu.js";

const menuSelector = ".menu"

const menusCollection = document.querySelectorAll(menuSelector)

menusCollection.forEach(menu => initMenu(menu))

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // },
  spaceBetween:120,
  navigation: {
    nextEl: ".slider-nav__next",
    prevEl:".slider-nav__prev",
  }
})