"use strict";
const scrollTop = document.getElementById("scroll__top");
scrollTop && (scrollTop.addEventListener("click", (function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})), window.addEventListener("scroll", (function () {
    window.scrollY > 300 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active")
})));

var swiper = new Swiper(".product__swiper--activation", {
    slidesPerView: 6,
    loop: 0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
        1400: {
            slidesPerView: 6
        },
        1100: {
            slidesPerView: 5,
            spaceBetween: 25
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        650: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

var swiper = new Swiper(".brands-cars", {
    autoplay: {
        delay: 1000,
    },
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        1200: {
            slidesPerView: 8
        },
        992: {
            slidesPerView: 7
        },
        768: {
            slidesPerView: 6
        },
        576: {
            slidesPerView: 5
        },
        480: {
            slidesPerView: 4
        },
        320: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

$(".brands-cars").hover(function () {
    (this).swiper.autoplay.stop();
}, function () {
    (this).swiper.autoplay.start();
});

var swiper = new Swiper(".tajir", {
    autoplay: {
        delay: 1100,
    },
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        1200: {
            slidesPerView: 8
        },
        992: {
            slidesPerView: 7
        },
        768: {
            slidesPerView: 6
        },
        576: {
            slidesPerView: 5
        },
        480: {
            slidesPerView: 4
        },
        320: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

$(".tajir").hover(function () {
    (this).swiper.autoplay.stop();
}, function () {
    (this).swiper.autoplay.start();
});

var swiper = new Swiper(".categories__inner", {
    slidesPerView: 7,
    loop: 0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
        1400: {
            slidesPerView: 7,
            spaceBetween: 25
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

// thumbs-img
const galleryThumbs = new Swiper('.thumbs .swiper', {
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 5,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.thumbs .swiper-button-next',
        prevEl: '.thumbs .swiper-button-prev',
    },
});

// thumbs-img
const galleryMain = new Swiper('.view-div .swiper', {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

// galleryMain.on('slideChangeTransitionStart', function() {
//     galleryThumbs.slideTo(galleryMain.activeIndex);
//   });

//   galleryThumbs.on('transitionStart', function(){
//     galleryMain.slideTo(galleryThumbs.activeIndex);
//   });


$(document).on('change', '#sign-user', function () {
    $('.store-inputs').hide();
});

$(document).on('change', '#sign-tajer', function () {
    $('.store-inputs').show();
});

// toogle password
$('.toogle-password').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('fa-eye');
    $(this).toggleClass('fa-eye-slash');
    var parent = $(this).parent();
    var type = parent.find('input').attr('type') == 'password' ? 'text' : 'password';
    parent.find('input').attr('type', type);
});

// checkout steps
$(document).on('click', '.choose--address .save-btn', function () {
    $('.address-li').hide();
    $('.confirmed-address').show();
    $('.products-checkout').show();
});

$(document).on('click', '.products-checkout .save-btn', function () {
    $('.products-li').hide();
    $('.confirmed-products').show();
    $('.choose-payment').show();
});

$(document).on('click', '.choose-payment .save-btn', function () {
    $('.payment-li').hide();
    $('.confirmed-payment').show();
    $('.continue-checkout').prop("disabled", false);
});

$(document).on('change', '.checkout-tab #money-transfer', function () {
    if ($('#money-transfer').prop('checked')) {
        $('.checkout-tab .hint').show();
    }
});

$(document).on('change', '.checkout-tab #payzaty', function () {
    if ($('#payzaty').prop('checked')) {
        $('.checkout-tab .hint').hide();
    }
});

var buttonPlus = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");
var incrementPlus = buttonPlus.click(function () {
    var $n = $(this)
        .parent(".p-quentity")
        .find(".input-qty");
    $n.val(Number($n.val()) + 1);
});

var incrementMinus = buttonMinus.click(function () {
    var $n = $(this)
        .parent(".p-quentity")
        .find(".input-qty");
    var amount = Number($n.val());
    if (amount > 1) {
        $n.val(amount - 1);
    }
});