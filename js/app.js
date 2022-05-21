window.swiper = new Swiper({
    el: ".slider__contenedor",
    // Padre
    slideClass: 'slider__slide',
    //   Slide class será el hijo
    createElements: true,
    autoplay:{
        delay:5000,

    },
    loop:true,
    pagination:true,
    // spaceBetween:20
    navigation:true
});