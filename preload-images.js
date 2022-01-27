const seasons = ['winter', 'spring', 'summer', 'autumn'];


function preloadImages(arr) {

	for (let a = 0; a < arguments.length; a++) {

		for (let i = 1; i <= 6; i++) {
			const img = new Image();
			img.src = `assets/jpg/${arguments[a]}/${i}.jpg`;
		}
	}
}
preloadImages(...seasons);


