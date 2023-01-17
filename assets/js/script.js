"use strict";
// const preLoader = function () {
//     let preloaderWrapper = document.getElementById("preloader");
//     window.onload = () => {
//         preloaderWrapper.classList.add("loaded")
//     }
// };
// preLoader();
var getSiblings = function (elem) {
        const siblings = [];
        let sibling = elem.parentNode.firstChild;
        for (; sibling;) 1 === sibling.nodeType && sibling !== elem && siblings.push(sibling), sibling = sibling.nextSibling;
        return siblings
    },
    slideUp = (target, time) => {
        const duration = time || 500;
        target.style.transitionProperty = "height, margin, padding", target.style.transitionDuration = duration + "ms", target.style.boxSizing = "border-box", target.style.height = target.offsetHeight + "px", target.offsetHeight, target.style.overflow = "hidden", target.style.height = 0, window.setTimeout(() => {
            target.style.display = "none", target.style.removeProperty("height"), target.style.removeProperty("overflow"), target.style.removeProperty("transition-duration"), target.style.removeProperty("transition-property")
        }, duration)
    },
    slideDown = (target, time) => {
        const duration = time || 500;
        target.style.removeProperty("display");
        let display = window.getComputedStyle(target).display;
        "none" === display && (display = "block"), target.style.display = display;
        const height = target.offsetHeight;
        target.style.overflow = "hidden", target.style.height = 0, target.offsetHeight, target.style.boxSizing = "border-box", target.style.transitionProperty = "height, margin, padding", target.style.transitionDuration = duration + "ms", target.style.height = height + "px", window.setTimeout(() => {
            target.style.removeProperty("height"), target.style.removeProperty("overflow"), target.style.removeProperty("transition-duration"), target.style.removeProperty("transition-property")
        }, duration)
    };

function TopOffset(el) {
    let rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop
    }
}
const headerStickyWrapper = document.querySelector("header"),
    headerStickyTarget = document.querySelector(".header__sticky");
if (headerStickyTarget) {
    let headerHeight = headerStickyWrapper.clientHeight;
    window.addEventListener("scroll", (function () {
        let StickyTargetElement, TargetElementTopOffset = TopOffset(headerStickyWrapper).top;
        window.scrollY > TargetElementTopOffset ? headerStickyTarget.classList.add("sticky") : headerStickyTarget.classList.remove("sticky")
    }))
}
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
var swiper = new Swiper(".hero__slider--activation", {
        slidesPerView: 1,
        loop: !0,
        clickable: !0,
        speed: 500,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        }
    }),
    swiper = new Swiper(".product__swiper--activation", {
        slidesPerView: 6,
        loop: 0,
        clickable: !0,
        spaceBetween: 30,
        breakpoints: {
            1024: {
                slidesPerView: 6
            },
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            480: {
                slidesPerView: 2
            },
            0: {
                slidesPerView: 1
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }),

    swiper = new Swiper(".brands-cars", {
        autoplay: {
            delay: 1100,
          },
        loop: true,
        spaceBetween: 20,
        breakpoints: {
            1024: {
                slidesPerView: 8
            },
            992: {
                slidesPerView: 7
            },
            768: {
                slidesPerView: 6
            },
            480: {
                slidesPerView: 4
            },
            0: {
                slidesPerView: 2
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    $(".brands-cars").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    swiper = new Swiper(".tajir", {
        autoplay: {
            delay: 1000,
          },
        loop: true,
        spaceBetween: 20,
        breakpoints: {
            1024: {
                slidesPerView: 8
            },
            992: {
                slidesPerView: 7
            },
            768: {
                slidesPerView: 6
            },
            480: {
                slidesPerView: 4
            },
            0: {
                slidesPerView: 2
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    $(".tajir").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
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


const tab = function (wrapper) {
    let tabContainer = document.querySelector(wrapper);
    tabContainer && tabContainer.addEventListener("click", (function (evt) {
        let listItem = evt.target;
        if (listItem.hasAttribute("data-toggle")) {
            let targetId = listItem.dataset.target,
                targetItem = document.querySelector(targetId);
            listItem.parentElement.querySelectorAll('[data-toggle="tab"]').forEach((function (list) {
                list.classList.remove("active")
            })), listItem.classList.add("active"), targetItem.classList.add("active"), setTimeout((function () {
                targetItem.classList.add("show")
            }), 150), getSiblings(targetItem).forEach((function (pane) {
                pane.classList.remove("show"), setTimeout((function () {
                    pane.classList.remove("active")
                }), 150)
            }))
        }
    }))
};
tab(".product__tab--one"), document.querySelectorAll("[data-countdown]").forEach((function (elem) {
    const countDownItem = function (value, label) {
            return `<div class="countdown__item" ${label}"><span class="countdown__number">${value}</span><p class="countdown__text">${label}</p></div>`
        },
        date = new Date(elem.getAttribute("data-countdown")).getTime(),
        second = 1e3,
        minute = 6e4,
        hour = 36e5,
        day = 864e5,
        countDownInterval = setInterval((function () {
            let currentTime = (new Date).getTime(),
                timeDistance = date - currentTime,
                daysValue = Math.floor(timeDistance / day),
                hoursValue = Math.floor(timeDistance % day / 36e5),
                minutesValue = Math.floor(timeDistance % 36e5 / 6e4),
                secondsValue = Math.floor(timeDistance % 6e4 / 1e3);
            elem.innerHTML = countDownItem(daysValue, "يوم") + countDownItem(hoursValue, "ساعة") + countDownItem(minutesValue, "دقيقة") + countDownItem(secondsValue, "ثانية"), timeDistance < 0 && clearInterval(countDownInterval)
        }), 1e3)
}));
const activeClassAction = function (toggle, target) {
    const to = document.querySelector(toggle),
        ta = document.querySelector(target);
    to && ta && (to.addEventListener("click", (function (e) {
        e.preventDefault();
        let triggerItem = e.target;
        triggerItem.classList.contains("active") ? (triggerItem.classList.remove("active"), ta.classList.remove("active")) : (triggerItem.classList.add("active"), ta.classList.add("active"))
    })), document.addEventListener("click", (function (event) {
        event.target.closest(toggle) || event.target.classList.contains(toggle.replace(/\./, "")) || event.target.closest(target) || event.target.classList.contains(target.replace(/\./, "")) || (to.classList.remove("active"), ta.classList.remove("active"))
    })))
};

function offcanvsSidebar(openTrigger, closeTrigger, wrapper) {
    let OpenTriggerprimary__btn = document.querySelectorAll(openTrigger),
        closeTriggerprimary__btn = document.querySelector(closeTrigger),
        WrapperSidebar = document.querySelector(wrapper),
        wrapperOverlay = wrapper.replace(".", "");

    function handleBodyClass(evt) {
        let eventTarget = evt.target;
        eventTarget.closest(wrapper) || eventTarget.closest(openTrigger) || (WrapperSidebar.classList.remove("active"), document.querySelector("body").classList.remove(`${wrapperOverlay}_active`))
    }
    OpenTriggerprimary__btn && WrapperSidebar && OpenTriggerprimary__btn.forEach((function (singleItem) {
        singleItem.addEventListener("click", (function (e) {
            null != e.target.dataset.offcanvas && (WrapperSidebar.classList.add("active"), document.querySelector("body").classList.add(`${wrapperOverlay}_active`), document.body.addEventListener("click", handleBodyClass.bind(this)))
        }))
    })), closeTriggerprimary__btn && WrapperSidebar && closeTriggerprimary__btn.addEventListener("click", (function (e) {
        null != e.target.dataset.offcanvas && (WrapperSidebar.classList.remove("active"), document.querySelector("body").classList.remove(`${wrapperOverlay}_active`), document.body.removeEventListener("click", handleBodyClass.bind(this)))
    }))
}
activeClassAction(".offcanvas__account--currency__menu", ".offcanvas__account--currency__submenu"), activeClassAction(".account__currency--link", ".dropdown__currency"), activeClassAction(".language__switcher", ".dropdown__language"), activeClassAction(".offcanvas__language--switcher", ".offcanvas__dropdown--language"), offcanvsSidebar(".minicart__open--btn", ".minicart__close--btn", ".offCanvas__minicart"), offcanvsSidebar(".search__open--btn", ".predictive__search--close__btn", ".predictive__search--box"), offcanvsSidebar(".widget__filter--btn", ".offcanvas__filter--close", ".offcanvas__filter--sidebar");
const quantityWrapper = document.querySelectorAll(".quantity__box");
quantityWrapper && quantityWrapper.forEach((function (singleItem) {
    let increaseButton = singleItem.querySelector(".increase"),
        decreaseButton = singleItem.querySelector(".decrease");
    increaseButton.addEventListener("click", (function (e) {
        let input = e.target.previousElementSibling.children[0];
        if (null != input.dataset.counter) {
            let value = parseInt(input.value, 10);
            value = isNaN(value) ? 0 : value, value++, input.value = value
        }
    })), decreaseButton.addEventListener("click", (function (e) {
        let input = e.target.nextElementSibling.children[0];
        if (null != input.dataset.counter) {
            let value = parseInt(input.value, 10);
            value = isNaN(value) ? 0 : value, value < 1 && (value = 1), value--, input.value = value
        }
    }))
}));
const openEls = document.querySelectorAll("[data-open]"),
    closeEls = document.querySelectorAll("[data-close]"),
    isVisible = "is-visible";
for (const el of openEls) el.addEventListener("click", (function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible)
}));
for (const el of closeEls) el.addEventListener("click", (function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible)
}));


const offcanvasHeader = function () {
    const offcanvasOpen = document.querySelector(".offcanvas__header--menu__open--btn"),
        offcanvasClose = document.querySelector(".offcanvas__close--btn"),
        offcanvasHeader = document.querySelector(".offcanvas__header"),
        offcanvasMenu = document.querySelector(".offcanvas__menu"),
        body = document.querySelector("body");
    offcanvasMenu && offcanvasMenu.querySelectorAll(".offcanvas__sub_menu").forEach((function (ul) {
        const subMenuToggle = document.createElement("button");
        subMenuToggle.classList.add("offcanvas__sub_menu_toggle"), ul.parentNode.appendChild(subMenuToggle)
    })), offcanvasOpen && offcanvasOpen.addEventListener("click", (function (e) {
        e.preventDefault(), null != e.target.dataset.offcanvas && (offcanvasHeader.classList.add("open"), body.classList.add("mobile_menu_open"))
    })), offcanvasClose && offcanvasClose.addEventListener("click", (function (e) {
        e.preventDefault(), null != e.target.dataset.offcanvas && (offcanvasHeader.classList.remove("open"), body.classList.remove("mobile_menu_open"))
    }));
    let mobileMenuWrapper = document.querySelector(".offcanvas__menu_ul");
    mobileMenuWrapper && mobileMenuWrapper.addEventListener("click", (function (e) {
        let targetElement = e.target;
        if (targetElement.classList.contains("offcanvas__sub_menu_toggle")) {
            const parent = targetElement.parentElement;
            parent.classList.contains("active") ? (targetElement.classList.remove("active"), parent.classList.remove("active"), parent.querySelectorAll(".offcanvas__sub_menu").forEach((function (subMenu) {
                subMenu.parentElement.classList.remove("active"), subMenu.nextElementSibling.classList.remove("active"), slideUp(subMenu)
            }))) : (targetElement.classList.add("active"), parent.classList.add("active"), slideDown(targetElement.previousElementSibling), getSiblings(parent).forEach((function (item) {
                item.classList.remove("active"), item.querySelectorAll(".offcanvas__sub_menu").forEach((function (subMenu) {
                    subMenu.parentElement.classList.remove("active"), subMenu.nextElementSibling.classList.remove("active"), slideUp(subMenu)
                }))
            })))
        }
    })), offcanvasHeader && document.addEventListener("click", (function (event) {
        event.target.closest(".offcanvas__header--menu__open--btn") || event.target.classList.contains(".offcanvas__header--menu__open--btn".replace(/\./, "")) || event.target.closest(".offcanvas__header") || event.target.classList.contains(".offcanvas__header".replace(/\./, "")) || (offcanvasHeader.classList.remove("open"), body.classList.remove("mobile_menu_open"))
    })), offcanvasHeader && window.addEventListener("resize", (function () {
        window.outerWidth >= 992 && (offcanvasHeader.classList.remove("open"), body.classList.remove("mobile_menu_open"))
    }))
};
offcanvasHeader();
const categoryMobileMenu = function () {
    const CategorySubMenu = document.querySelector(".category__mobile--menu");
    CategorySubMenu && CategorySubMenu.querySelectorAll(".category__sub--menu").forEach((function (ul) {
        let catsubMenuToggle = document.createElement("button");
        catsubMenuToggle.classList.add("category__sub--menu_toggle"), ul.parentNode.appendChild(catsubMenuToggle)
    }));
    let categoryMenuWrapper = document.querySelector(".category__mobile--menu_ul");
    categoryMenuWrapper && categoryMenuWrapper.addEventListener("click", (function (e) {
        let targetElement = e.target;
        if (targetElement.classList.contains("category__sub--menu_toggle")) {
            const parent = targetElement.parentElement;
            parent.classList.contains("active") ? (targetElement.classList.remove("active"), parent.classList.remove("active"), parent.querySelectorAll(".category__sub--menu").forEach((function (subMenu) {
                subMenu.parentElement.classList.remove("active"), subMenu.nextElementSibling.classList.remove("active"), slideUp(subMenu)
            }))) : (targetElement.classList.add("active"), parent.classList.add("active"), slideDown(targetElement.previousElementSibling), getSiblings(parent).forEach((function (item) {
                item.classList.remove("active"), item.querySelectorAll(".category__sub--menu").forEach((function (subMenu) {
                    subMenu.parentElement.classList.remove("active"), subMenu.nextElementSibling.classList.remove("active"), slideUp(subMenu)
                }))
            })))
        }
    }))
};
categoryMobileMenu();


$(document).on('change','#sign-user', function(){
    $('.store-inputs').hide();
});

$(document).on('change','#sign-tajer', function(){
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
