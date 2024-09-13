const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

    // Sélection des flèches
    const rightArrow = document.querySelector('.arrow_right');
    const leftArrow = document.querySelector('.arrow_left');

    // Ajout des event listeners sur les flèches
    rightArrow.addEventListener('click', function () {
        console.log("Flèche droite cliquée");
    });

    leftArrow.addEventListener('click', function () {
        console.log("Flèche gauche cliquée"); 
    });



