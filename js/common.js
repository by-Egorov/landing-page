const owl = $('.owl-carousel')
owl.owlCarousel({
	center: true,
	loop: true,
	margin: 30,
	startPosition: 1, // С какого слайда начинается
	items: 3,
	responsiveClass: true,
	responsive: {
		576: {
			items: 2,
			center: false
		}
	}
})
$('.slider__btn-prev').click(function () {
	owl.trigger('prev.owl.carousel')
})
$('.slider__btn-next').click(function () {
	owl.trigger('next.owl.carousel')
})


const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')

headerBurger.addEventListener('click', function () {
	headerBurger.classList.toggle('active')
	headerMenu.classList.toggle('active')
})