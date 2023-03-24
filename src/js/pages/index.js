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
    cases: "#cases .swiper",
  },
  counters: {
    title: "#title_counter",
    cases: "#cases .slides-counter",
  },
  menus: ".menu",
};

document.addEventListener("DOMContentLoaded", () => {
  const menusCollection = document.querySelectorAll(selectors.menus);

  menusCollection.forEach((menu) => initMenu(menu));

  let titleCounter = document.querySelector(selectors.counters.title);
  titleCounter = new SlidesCounter(titleCounter);

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
  let casesCounters = document.querySelectorAll(selectors.counters.cases);

  casesCounters = Array.from(casesCounters).map((el) => new SlidesCounter(el));
  console.log(casesCounters);
  const casesSliders = document.querySelectorAll(selectors.sliders.cases);

  const sliderControls = document.querySelectorAll(".s-cases__controls");

  casesSliders.forEach((item, index) => {
    new Swiper(item, {
      modules: [Navigation],
      spaceBetween: 30,
      navigation: {
        prevEl: sliderControls[index].querySelector(".s-cases__button-prev"),
        nextEl: sliderControls[index].querySelector(".s-cases__button-next"),
      },
      breakpoints: {
        1280: {
          slidesPerView: 2,
        },
      },
      on: {
        init: (swiper) => {
          casesCounters[index].init(swiper.slides.length);
        },
        slideChange: (swiper) => casesCounters[index].setCurrent(swiper.activeIndex),
        observerUpdate: (swiper) => casesCounters[index].init(swiper.slides.length)
      },
      observer: true,
      observeParents: true,
    });
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
      initialHeight: 220,
    },
  ];

  animative.forEach(setHeightTransition);
});
