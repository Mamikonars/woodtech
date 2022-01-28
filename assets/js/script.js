//mobile menu 
(function(){

const menuBlock = document.querySelector('.main-nav');
const burgerBtn = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', ()=>{
    menuBlock.classList.toggle('menu-active');
})
})();


(function(){
//wrapping li first word/number to span
Array.from(document.querySelectorAll('.advantages__list-item')).forEach(function(el) {
  el.innerHTML = el.innerHTML.replace(/^\s*\w+/, '<span>$&</span>');
});


Array.from(document.querySelectorAll('.slide-label')).forEach(function(el) {
  el.innerHTML = el.innerHTML.replace(/^\s*\w+/, '<span>$&</span>');
});
})();


//popup
(function(){

let popup = document.querySelector(".popup-wrapper");
let popupForm = document.querySelector(".popup-form");
let popupBtn = document.querySelector(".popup-btn");
let popupClose = document.querySelector(".close-btn");


if(popupBtn) {
popupBtn.addEventListener("click", (e) => {
  e.preventDefault;
  showPopup();
  
  //button target (from where btn clicked)
  popupForm.querySelector('[name="target"]').value = popupBtn.dataset.target;
});
}

popupClose.addEventListener("click", (e) => {
  e.preventDefault;
  removePopup();
});

popupForm.addEventListener("submit", () => {
  removePopup();
});

popup.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("popup-wrapper")) {
    removePopup();
  } else return;
});

function showPopup() {
  popup.classList.add("active");
  bodyScroll();
}

function removePopup() {
  popup.classList.remove("active");
  bodyScroll();
}

function bodyScroll() {
  document.body.classList.toggle("no-scroll");
}
})();


//swiper main slide
(function(){
 const swiperMain = new Swiper('.swiper-main', {
  slidesPerView: 1,
    centeredSlides: true,
    //roundLengths: true,
  scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
          draggable: true,
          dragSize: 50,
          snapOnRelease: true
        },  

        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true,
  },

});

 const swiperSingle = new Swiper('.single-slider__block', {     
    effect : "fade",
    speed: 1200,
    autoplay : {
      delay:2000
    }
  
});

 const itemsSlider = new Swiper('.items-slider3', {
   slidesPerView:3,
   pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
  
});
})();

