//Выпадающее иеню и интерактивная кнопка бургер
const menu = document.querySelector('.nav-list')
const burger = document.querySelector('.header__burger')
const body = document.body

const toggleMenu = () => {
	menu.classList.toggle('active')
	burger.classList.toggle('active')
	body.classList.toggle('lock')
}

burger.addEventListener('click', (event) => {
	toggleMenu()
})

// Плавная прокрутка

const link = document.querySelectorAll('.nav-link')

link.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault()
		const ID = event.target.getAttribute('href').substr(1)

		document.getElementById(ID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
		toggleMenu()
	})
})


/*
console.log(" 100 ballov: \n Вёрстка валидная +10 \n Вёрстка семантическая +20 \n Вёрстка соответствует макету +48 \n Требования к css + 12 \n Интерактивность, реализуемая через css +20")
alert("100 ballov: вёрстка валидная +10, вёрстка семантическая +20, вёрстка соответствует макету +48, требования к css + 12, интерактивность, реализуемая через css +20")
*/