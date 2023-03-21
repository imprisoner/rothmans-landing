"use strict";

import Swiper, { Navigation, EffectFade, Autoplay } from "swiper";
import initMenu from "../components/menu.js";
import SlidesCounter from "../components/slidesCounter.js";
import headerMenu from "../components/headerMenu.js";
import modal from "../components/modal.js";

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

// animating dynamic height TODO

document.addEventListener("DOMContentLoaded", () => {
  // observe text in cases section
  const nodes = ["#observable-1", "#observable-2"].map((sel) =>
    document.querySelector(sel)
  );

  nodes.forEach((node) => {
    // set initial height
    node.style.height = node.offsetHeight + "px";
    node.style.transition = "height 0.8s";

    // set height:"fit-content" to childNodes

    node.childNodes.forEach((child) => (child.style.height = "fit-content"));

    // set observable

    const observer = new MutationObserver((mr) => {
      // const [record] = mr
      if (node.offsetHeight < node.scrollHeight) {
        console.log("It's bigger!");
        return (node.style.height = node.scrollHeight + "px");
      }

      // find the biggest value of childNodes heights
      const childHeights = Array.from(node.childNodes)
        .map((child) => child.offsetHeight)
        .sort((a, b) => a - b);
      // assign biggest value to our node
      node.style.height = childHeights[childHeights.length - 1] + "px";
    });

    observer.observe(node, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  });
});
