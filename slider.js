"use strict";

new Swiper(".cardSwiper", {
  slidesPerView: 3,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    modifier: 1,
    slideShadows: true,
    depth: 100,
  },
  centeredSlides: true,
  // spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 2,
});


new Swiper(".teamSwiper", {
  slidesPerView: 3,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    modifier: 1,
    slideShadows: true,
    depth: 100,
  },
  centeredSlides: true,
  // spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 1,
});

new Swiper(".rewiev", {
  slidesPerView: 3,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    modifier: 1,
    slideShadows: true,
    depth: 100,
  },
  centeredSlides: true,
  // spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 1,
});