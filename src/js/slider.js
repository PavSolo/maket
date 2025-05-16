import Swiper from 'swiper';
import {Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.mySwiper', {
    loop: true,
    modules: [Pagination],
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

const reviewsSlider = new Swiper('.reviews__slider', {
    loop: true,
    grabCursor: true,
    initialSlide: 1,
    centeredSlides: true,
    modules: [EffectCoverflow],
    slidesPerView: 1.2,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 1,
        stretch: -3,
        depth: 10,
        modifier: 10,
        slideShadows: true,
    },
});
