var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  function updateSwiper() {
if (window.innerWidth <= 770) {
  swiper.params.slidesPerView = 1;
} else {
  swiper.params.slidesPerView = 3;
}
swiper.update();

}


function updateSwiper2() {
if (window.innerWidth <= 770) {
  swiper2.params.slidesPerView = 1;
} else {
  swiper2.params.slidesPerView = 3;
}
swiper2.update();

}

function updateSwiper3() {
if (window.innerWidth <= 770) {
  swiper3.params.slidesPerView = 1;
} else {
  swiper3.params.slidesPerView = 3;
}
swiper3.update();

}

function updateSwiper4() {
if (window.innerWidth <= 770) {
  swiper4.params.slidesPerView = 1;
} else {
  swiper4.params.slidesPerView = 3;
}
swiper4.update();

}



// Ejecuta la función al cargar la página y al cambiar el tamaño de la ventana
updateSwiper();
window.addEventListener("resize", updateSwiper);


updateSwiper2();
window.addEventListener("resize", updateSwiper2);


updateSwiper3();
window.addEventListener("resize", updateSwiper3);


updateSwiper4();
window.addEventListener("resize", updateSwiper4);
