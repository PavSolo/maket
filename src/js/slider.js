import Swiper from 'swiper';
import {Pagination } from 'swiper/modules';
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
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: 1.2,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});
