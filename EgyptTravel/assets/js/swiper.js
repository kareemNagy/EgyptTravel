var swiperMain1 = new Swiper('.swiper-container-main', {
    speed: 1500,
    // grabCursor: true,
    mousewheel: true,
    freeMode: true,
    parallax: true,
    slidesPerView: 1,
    pagination: {
        el: '.footer-nav',
        clickable: true,
        renderBullet: function(i, className) {
            if (i == 0) {
                return `<li class="${className}">Welcome</li>`;
            } else if (i == 1) {
                return '';
            } else if (i == 2) {
                return `<li class="${className}">Experience</li>`;
            } else if (i == 3) {
                return `<li class="${className}">Discover</li>`;
            } else if (i == 4) {
                return `<li class="${className}">YOUR VISIT</li>`;
            } else if (i == 5) {
                return `<li class="${className}">WHAT'S ON </li>`;
            } else if (i = 6) {
                return `<li class="${className}">Media</li>`
            }

        },
    },
});
var swiperMain2 = new Swiper('.swiper-container-main-2', {
    speed: 2500,
    // grabCursor: true,
    mousewheel: true,
    // freeMode: true,
    parallax: true,
    slidesPerView: 1,
    pagination: {
        el: '.footer-nav',
        clickable: true,
        renderBullet: function(i, className) {
            if (i == 0) {
                return `<li class="${className}">Welcome</li>`;
            } else if (i == 1) {
                return '';
            } else if (i == 2) {
                return `<li class="${className}">Experience</li>`;
            } else if (i == 3) {
                return `<li class="${className}">Discover</li>`;
            } else if (i == 4) {
                return `<li class="${className}">YOUR VISIT</li>`;
            } else if (i == 5) {
                return `<li class="${className}">WHAT'S ON </li>`;
            } else if (i = 6) {
                return `<li class="${className}">Media</li>`
            }

        },
    },
});




swiperMain1.on('slideChange', function() {
    console.log(this.activeIndex)
    if (this.activeIndex === 2) {
        document.querySelector('.map').classList.add('start');

    }
});

swiperMain2.on('slideChange', function() {
    console.log(this.activeIndex)
    if (this.activeIndex === 2) {
        document.querySelector('.map').classList.add('start');

    }
});



var swiper = new Swiper('.swiper-container-visit', {
    slidesPerView: 1.36,
    autoHeight: true,
    spaceBetween: 20,
    slidesPerGroup: 1,
    speed: 2000,
    loop: true,
    navigation: {
        nextEl: '.visit-nav-next',
        prevEl: '.visit-nav-prev',
    },
});