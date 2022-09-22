import Swiper from '../lib/swiper-bundle.esm.browser.min.js';

// Slider

new Swiper('.goods__block', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
    navigation: {
        prevEl:'.goods__arrow_prev',
        nextEl:'.goods__arrow_next'
    },
    preventClicks: true,
    a11y: false,
});


// Modal

const productMore = document.querySelectorAll('.product__more');
const modal = document.querySelector('.modal');

productMore.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.add('modal_open');
    })
});

modal.addEventListener('click', (({target}) => {
    if(target === modal) {
        modal.classList.remove('modal_open');
    }
}))

const formPlaceholder = document.querySelectorAll('.form__placeholder');
const formInput = document.querySelectorAll('.form__input');

formInput.forEach((input, i) => {
    input.addEventListener('focus', () => {
        formPlaceholder[i].classList.add('form__placeholder_active');
    })

    input.addEventListener('blur', () => {
        if (input.value === '') {
            formPlaceholder[i].classList.remove('form__placeholder_active');
        }  
    })
})

// Modal

const countryBtn = document.querySelector('.country__btn');
const countryWrapper = document.querySelector('.country__wrapper');

countryBtn.addEventListener('click', () => {
    countryWrapper.classList.toggle('country__wrapper_open');
})

countryWrapper.addEventListener('click', ({target}) => {
    if(target.classList.contains('country__choice')) {
        countryWrapper.classList.remove('country__wrapper_open');
    }
})

