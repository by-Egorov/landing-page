const owl = $('.owl-carousel')
owl.owlCarousel({
	center: true,
	loop: true,
	margin: 10,
	items: 1,
	dotsEach: true,
	responsive: {
		1000: {
			items: 3,
			margin: 30
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
const bodyLock = document.querySelector('body')

headerBurger.addEventListener('click', function () {
	headerBurger.classList.toggle('active')
	headerMenu.classList.toggle('active')

	if (headerMenu.classList.contains('active')) {
		bodyLock.classList.add('lock')
	} else {
		bodyLock.classList.remove('lock')
	}
})
