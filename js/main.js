// font-family: 'Bebas Neue', cursive;
// font-family: 'Open Sans', sans-serif;

new Swiper('.social-battle__slideImg', {
	navigation: {
		nextEl: '.social-battle__nextBtn',
	},
	pagination: {
		el:'.swiper-pagination'
	},

	// autoplay: {
	// 	delay: 3000,
	// 	stopOnLastSlide: false,
	// 	disableOnInteraction: false,
	// },
	slidesPerView: 1,
	spaceBetween: 20,
	freeMode: false,
	loop: true,
	speed: 800,
	// autoHeight: false,

		effect: 'cube',
	cubeEffect: {
		slideShadows: false,
		shadow: false,
		shadowOffset: 50,
		shadowScale: 0.95
	}

})

$('.burger__btn').click(function () {
	$('.burger__btn,.header-nav__menu').toggleClass('active');
	$('body').toggleClass('lock')
})
