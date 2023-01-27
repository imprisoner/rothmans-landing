import Swiper, { Navigation } from 'swiper'
import initMenu from "../components/menu.js";

const menuSelector = ".menu"

const menusCollection = document.querySelectorAll(menuSelector)

menusCollection.forEach(menu => initMenu(menu))

const titleSwiper = new Swiper('#title_slider', {
  modules: [Navigation],
  spaceBetween:120,
  navigation: {
    nextEl: ".s-title__navigation .slider-nav__next",
    prevEl:".s-title__navigation .slider-nav__prev",
  }
})

// 

const casesSlider = new Swiper('#cases_slider', {
  modules: [Navigation],
  spaceBetween: 30,
  slidesPerView: 2,
  navigation: {
    nextEl: ".s-title__navigation .slider-nav__next",
    prevEl:".s-title__navigation .slider-nav__prev",
  }
})