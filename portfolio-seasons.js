// Active vision for portfolio buttons and
// change images for current active season portfolio button


portfolioButtons.forEach((button) => {

	const portfolioButtons = document.querySelectorAll('.portfolio-buttons__item')
	const portfolioImages = document.querySelectorAll('.portfolio-imagies')

	button.addEventListener('click', (event) => {
		event.preventDefault()

		portfolioButtons.forEach(item => item.classList.remove('current'))
		toggleSeasonsPhoto()

		portfolioImages.forEach(item => item.classList.remove('active'))

		if (button.classList.contains('winter')) {
			document.getElementById('winter').classList.toggle('active')
		}
		if (button.classList.contains('summer')) {
			document.getElementById('summer').classList.toggle('active')
		}
		if (button.classList.contains('autumn')) {
			document.getElementById('autumn').classList.toggle('active')
		}
		if (button.classList.contains('spring')) {
			document.getElementById('spring').classList.toggle('active')
		}

	})

	const toggleSeasonsPhoto = () => {
		button.classList.toggle('current')
	}
})










