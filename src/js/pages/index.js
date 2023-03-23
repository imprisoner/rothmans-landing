"use strict";

import Swiper, { Navigation, EffectFade, Autoplay } from "swiper";
import initMenu from "../components/menu.js";
import SlidesCounter from "../components/slidesCounter.js";
import headerMenu from "../components/headerMenu.js";
import modal from "../components/modal.js";
import setHeightTransition from "../components/hieghtTransitions.js";

const selectors = {
  sliders: {
    title: "#title_slider",
    cases: "#cases_slider",
  },
  counters: {
    title: "#title_counter",
    cases: "#cases_counter",
  },
  menus: ".menu",
};

const menusCollection = document.querySelectorAll(selectors.menus);

menusCollection.forEach((menu) => initMenu(menu));

const titleCounter = new SlidesCounter(selectors.counters.title);

const titleSlider = new Swiper(selectors.sliders.title, {
  modules: [Navigation, EffectFade],
  spaceBetween: 120,
  loop: true,
  navigation: {
    prevEl: ".s-title__button-prev",
    nextEl: ".s-title__button-next",
  },
  speed: 800,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // autoplay: true,
  on: {
    init: (swiper) => {
      titleCounter.init(swiper.slides.length - swiper.loopedSlides * 2);
    },
    slideChange: (swiper) => {
      titleCounter.setCurrent(swiper.realIndex);
    },
  },
});

//
const casesCounter = new SlidesCounter(selectors.counters.cases);

const casesSlider = new Swiper(selectors.sliders.cases, {
  modules: [Navigation],
  spaceBetween: 30,
  navigation: {
    prevEl: ".s-cases__button-prev",
    nextEl: ".s-cases__button-next",
  },
  breakpoints: {
    1280: {
      slidesPerView: 2,
    },
  },
  on: {
    init: (swiper) => casesCounter.init(swiper.slides.length),
    slideChange: (swiper) => casesCounter.setCurrent(swiper.activeIndex),
    beforeDestroy: () => console.log("onBeforeDestroy"),
  },
});

headerMenu();
modal();

// animate sections

const animative = [
  {
    target: "#observable1",
    changeTrigger: ".s-cases__menu",
    initialHeight: 85,
  },
  {
    target: "#observable2",
    changeTrigger: ".s-service__menu",  
    initialHeight: 220
  },
];

animative.forEach(setHeightTransition)