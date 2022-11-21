
document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});


const btns = document.querySelectorAll(".bottom__menu");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  });
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.top__right');
let menuLink = document.querySelectorAll('.nav__item');
let closeBtn = document.querySelector('.top__btn-close')

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('top__right--active');
  closeBtn.classList.toggle('top__btn-close--active');
  document.body.classList.toggle('stop-scroll');
});

menuLink.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('top__right--active');
    closeBtn.classList.remove('top__btn-close--active');
    document.body.classList.remove('stop-scroll')
  })
});

closeBtn.addEventListener('click', function () {
  burger.classList.remove('burger--active');
  menu.classList.remove('top__right--active');
  closeBtn.classList.remove('top__btn-close--active');
  document.body.classList.remove('stop-scroll')
});


let open = document.querySelector('.search__open');
let search = document.querySelector('.top__form');
let close = document.querySelector('.search__form-close');

open.addEventListener('click', function () {
  search.classList.toggle('top__form-active');
});

close.addEventListener('click', function () {
  search.classList.remove('top__form-active');
});


const swiperHero = new Swiper('.js-hero-swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});


const element = document.querySelector('.left__top-select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
});


const swiper = new Swiper('.swiper-container', {
  slidesPerView: '1',
  spaceBetween: 50,
  pagination: {
    el: ".text-navigation",
    type: "fraction"
  },
  navigation: {
    nextEl: '.swiper-top-next',
    prevEl: '.swiper-top-prev'
  },
  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",
  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    520: {
      slidesPerView: 2,
      spaceBetween: 38
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 38
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1225: {
      slidesPerView: 3,
      spaceBetween: 48
    },

  }
});


$(".accordion").accordion({
  heightStyle: "content",
  collapsible: "true"

});


document.querySelectorAll('.painters__tabs-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (el) {
    const path = el.currentTarget.dataset.path;
    document.querySelectorAll('.aside-tabs').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('aside-tabs--active');
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('aside-tabs--active');
    document.querySelectorAll('.painters__tabs-btn').forEach(function (btn) {
      btn.classList.remove('painters__tabs-btn--active')
    });
    el.currentTarget.classList.add('painters__tabs-btn--active')
  });
});

if (window.matchMedia('(max-width: 576px)').matches) {
  function slowScroll(id) {
    var offset = 0;
    $("html, body").animate({
      scrollTop: $(id).offset().top - offset
    }, 1000);
    return false;
  };
}


const swiper2 = new Swiper('.swiper-container2', {
  slidesPerView: '3',
  spaceBetween: 50,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-top-next2',
    prevEl: '.swiper-top-prev2'
  },
  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 1,
      slidesPerGroup: 1,
    },

    610: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1022: {
      slidesPerView: 3,
      spaceBetween: 28,
      slidesPerGroup: 3,
    },

    1225: {
      slidesPerView: 3,
      spaceBetween: 48
    },
  },
});

$(document).ready(function () {
  $('.tooltip').tooltipster({
    contentCloning: true,
    maxWidth: 264,
  })
});

$('.tooltip')
  .focus(function () {
    $(this).tooltipster('open');
  })
  .blur(function () {
    $(this).tooltipster('close');
  });


const swiper3 = new Swiper('.swiper-container3', {
  slidesPerView: '1',
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-top-next3',
    prevEl: '.swiper-top-prev3'
  },
  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",
  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    520: {
      slidesPerView: 2,
      spaceBetween: 38
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50
    },

    1225: {
      slidesPerView: 3,
      spaceBetween: 50
    },

  }
});

new JustValidate('.content__form', {
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    }
  },
  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Введите более 2-х символов',
      maxLength: 'Введите менее 10-ти символов'
    },

    tel: {
      required: 'Введите телефон',
      function: 'Телефон должен содержать 10 символов'
    }
  },
});

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);


ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.7598, 37.6010],
    zoom: 14,
    controls: ['geolocationControl', 'zoomControl']
  },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "356px", right: "17px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "265px", right: "17px" }
    });

  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/object-map.svg',
    iconImageSize: [20, 20]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
};

class Modal {
  constructor(options) {
    let defaultOptions = {
      isOpen: () => { },
      isClose: () => { },
    }
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.modal');
    this.speed = false;
    this.animation = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;
    this.fixBlocks = document.querySelectorAll('.fix-block');
    this.focusElements = [
      'a[href]',
      'input',
      'button',
      'select',
      'textarea',
      '[tabindex]'
    ];
    this.events();
  }

  events() {
    if (this.modal) {
      document.addEventListener('click', function (e) {
        const clickedElement = e.target.closest('[data-btn]');
        if (clickedElement) {
          let target = clickedElement.dataset.btn;
          let animation = clickedElement.dataset.animation;
          let speed = clickedElement.dataset.speed;
          this.animation = animation ? animation : 'fade';
          this.speed = speed ? parseInt(speed) : 300;
          this.modalContainer = document.querySelector(`[data-card="${target}"]`);
          this.open();
          return;
        }

        if (e.target.closest('.modal__content-close')) {
          this.close();
          return;
        }
      }.bind(this));

      window.addEventListener('keydown', function (e) {
        if (e.keyCode == 27) {
          if (this.isOpen) {
            this.close();
          }
        }

        if (e.keyCode == 9 && this.isOpen) {
          this.focusCatch(e);
          return;
        }
      }.bind(this));

      window.addEventListener('click', function (e) {
        if (!e.target.classList.contains('.modal__content') && !e.target.closest('.modal__content') && this.isOpen) {
          this.close();
        }
      }.bind(this));
    }
  }

  open(selector) {
    this.modal.classList.add('is-open');
    this.disableScroll();
    this.previousActiveElement = document.activeElement;
    this.modalContainer.classList.add('modal-open');
    this.modalContainer.classList.add(this.animation);
    this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    setTimeout(() => {
      this.modalContainer.classList.add('animate-open');
      this.options.isOpen(this);
      this.isOpen = true;
      this.focusTrap();
    }, this.speed);
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('animate-open');
      this.modalContainer.classList.remove(this.animation);
      this.modal.classList.remove('is-open');
      this.modalContainer.classList.remove('modal-open');

      this.enableScroll();
      this.options.isClose(this);
      this.isOpen = false;
      this.focusTrap();
    }
  }

  focusCatch(e) {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    const focusArray = Array.prototype.slice.call(focusable);
    const focusedIndex = focusArray.indexOf(document.activeElement);

    if (e.shiftKey && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }

  focusTrap() {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    if (this.isOpen) {
      if (focusable) focusable[0].focus();
    }
    else {
      this.previousActiveElement.focus();
    }
  }

  disableScroll() {
    let pagePosition = window.scrollY;
    this.lockPadding();
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }

  enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    this.unlockPadding();
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute('data-position');
  }

  lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    this.fixBlocks.forEach((el) => {
      el.style.paddingRight = paddingOffset;
    });
    document.body.style.paddingRight = paddingOffset;
  }

  unlockPadding() {
    this.fixBlocks.forEach((el) => {
      el.style.paddingRight = '0px';
    });
    document.body.style.paddingRight = '0px';
  }
}

const modal = new Modal({
  isOpen: () => {
    console.log(modal);
    console.log('opened');
  },
  isClose: () => {
    console.log('closed');
  },
});


