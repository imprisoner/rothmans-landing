import Swiper, { Navigation } from 'swiper'
import initMenu from "../components/menu.js";
import SlidesCounter from "../components/slides-counter.js"

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
  slidesPerView: 2,
  navigation: {
    prevEl:".s-cases__button-prev",
    nextEl: ".s-cases__button-next",
  },
  on: {
    init: (swiper) => casesCounter.init(swiper.slides.length),
    slideChange: (swiper) => casesCounter.setCurrent(swiper.activeIndex)  
  }
})


