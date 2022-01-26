const colorToggleItems = document.querySelectorAll('[data-theme]')
const colorThemeToggleButtons = document.querySelectorAll('.theme-toggle__button')

function themeColorToggle() {

	colorThemeToggleButtons.forEach(button => {

		button.addEventListener('click', (event) => {
			event.preventDefault()

			colorThemeToggleButtons.forEach(item => {
				item.classList.remove('active')
			})
			button.classList.add('active')

			if (button.classList.contains('dark')) {
				colorToggleItems.forEach(button => button.classList.remove('white-theme'))
			}
			if (button.classList.contains('white')) {
				colorToggleItems.forEach(button => button.classList.add('white-theme'))
			}
		})
	})
}

themeColorToggle()

