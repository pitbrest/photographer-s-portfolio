// Выпадающее иеню и интерактивная кнопка бургер

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


// Самооценка работы

console.log(" 75 баллов: \n Вёрстка соответствует макету. Ширина экрана 768px +48 \n Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15 \n Вёрстка соответствует макету +48 \n На ширине экрана 768рх и меньше реализовано адаптивное меню +22 \n")
