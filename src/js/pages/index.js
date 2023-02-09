"use strict"

import Swiper, { Navigation } from 'swiper'
import initMenu from "../components/menu.js";
import SlidesCounter from "../components/slidesCounter.js"
import headerMenu from "../components/headerMenu.js"
import modal from "../components/modal.js"


const selectors = {
  sliders: {
    title: "#title_slider",
    cases: "#cases_slider"
  },
  counters: {
    title: "#title_counter",
    cases: "#cases_counter"
  },
  menus: ".menu"
}

const menusCollection = document.querySelectorAll(selectors.menus)

menusCollection.forEach(menu => initMenu(menu))
console.log(menusCollection)

const titleCounter = new SlidesCounter(selectors.counters.title)

const titleSlider = new Swiper(selectors.sliders.title, {
  modules: [Navigation],
  spaceBetween:120,
  navigation: {
    prevEl:".s-title__button-prev",
    nextEl: ".s-title__button-next",
  },
  on: {
    init: (swiper) => titleCounter.init(swiper.slides.length),
    slideChange: (swiper) => titleCounter.setCurrent(swiper.activeIndex)  
  }
})

// 
const casesCounter = new SlidesCounter(selectors.counters.cases)

const casesSlider = new Swiper(selectors.sliders.cases, {
  modules: [Navigation],
  spaceBetween: 30,
  navigation: {
    prevEl:".s-cases__button-prev",
    nextEl: ".s-cases__button-next",
  },
  breakpoints: {
    1280: {
      slidesPerView: 2
    }
  },
  on: {
    init: (swiper) => casesCounter.init(swiper.slides.length),
    slideChange: (swiper) => casesCounter.setCurrent(swiper.activeIndex)  
  }
})

headerMenu()
modal()