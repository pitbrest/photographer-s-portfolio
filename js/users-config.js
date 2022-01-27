// Отображение при загрузке страницы сохраненного в localStorage языка

if (localStorage.lang) {
	let lng = localStorage.getItem('lang')
	document.querySelector(`.${lng}`).classList.add('active')
} else { document.querySelector('.language-toggle__button.en').classList.add('active') }


// Отображение при загрузке страницы сохраненной в localStorage темы


const colorItems = document.querySelectorAll('[data-theme]')

if (localStorage.theme && localStorage.getItem('theme') == 'dark-theme') {

	colorItems.forEach(item => {
		item.classList.remove('white-theme')
	})
	document.querySelector('.theme-toggle__button.dark').classList.add('active')
}
if (localStorage.theme && localStorage.getItem('theme') == 'white-theme') {

	colorItems.forEach(item => {
		item.classList.add('white-theme')
	})
	document.querySelector('.theme-toggle__button.white').classList.add('active')
} else {
	colorItems.forEach(item => {
		item.classList.remove('white-theme')
	})
	document.querySelector('.theme-toggle__button.dark').classList.add('active')
}


