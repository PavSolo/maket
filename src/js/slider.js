import Swiper from 'swiper';
import {Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.mySwiper', {
    loop: true,
    modules: [Pagination],
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    //resizeObserver: false,
});