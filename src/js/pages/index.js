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
  const nodes = [".s-cases", ".s-service"].map((sel) =>
    document.querySelector(sel)
  );
  nodes.forEach((node) => {
    // set initial height
    node.style.height = node.offsetHeight + "px";
    node.style.transition = "height 0.8s";

    const observer = new MutationObserver((mr) => {
      if (node.scrollHeight > node.offsetHeight) {
        return (node.style.height = node.scrollHeight + "px");
      }

      node.style.height = node.firstElementChild.offsetHeight + "px";
    });

    observer.observe(node, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  });
  // nodes.forEach((node) => {
  //   // set initial height
  //   node.style.height = node.offsetHeight + "px";
  //   node.style.transition = "height 0.8s";

  //   // set height:"fit-content" to childNodes
  //   node.childNodes.forEach((child) => {
  //     if (child.nodeType !== 3) {
  //       child.style.height = "fit-content";
  //     }
  //   });

  //   // set observable

  //   const observer = new MutationObserver((mr) => {
  //     // const [record] = mr
  //     if (node.offsetHeight < node.scrollHeight) {
  //       console.log("It's bigger!");
  //       return (node.style.height = node.scrollHeight + "px");
  //     }

  //     // find the biggest value of childNodes heights
  //     const childHeights = Array.from(node.childNodes.filter(child => child.nodeType !== 3))
  //       .map((child) => child.offsetHeight)
  //       .sort((a, b) => a - b);
  //     // assign biggest value to our node
  //     node.style.height = childHeights[childHeights.length - 1] + "px";
  //   });

  // observer.observe(node, {
  //   childList: true,
  //   subtree: true,
  //   characterData: true,
  // });
  // });
});

const optionsWrap = document.querySelector(".s-service__options");
const tabs = document.querySelector(".s-service__menu");

const initialHeight = 220;

const getChildren = () => Array.from(optionsWrap.children);

// set height: fit-content to childElements
getChildren().forEach((child) => (child.style.height = "fit-content"));
// set height and transition to optionsWrap
optionsWrap.style.transition = "height 0.8s";

if (optionsWrap.offsetHeight < initialHeight) {
  optionsWrap.style.height = initialHeight + "px";
} else {
  optionsWrap.style.height = optionsWrap.offsetHeight + "px"
}

tabs.addEventListener("click", () => {
  setTimeout(() => {
    const optionsWrap = document.querySelector(".s-service__options");
    
    
    if (optionsWrap.offsetHeight < optionsWrap.scrollHeight) {
      optionsWrap.style.height = optionsWrap.scrollHeight + "px";
    } else {
      // get highest children height value
      const [height] = getChildren()
      .map((child) => child.offsetHeight)
      .sort((a, b) => b - a);
      if (initialHeight > height) {
        optionsWrap.style.height = initialHeight + "px";
        return;
      }
      optionsWrap.style.height = height + "px";
    }
  })
});
