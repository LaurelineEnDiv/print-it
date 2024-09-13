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

// Sélection des éléments du DOM
const rightArrow = document.querySelector('.arrow_right');
const leftArrow = document.querySelector('.arrow_left');
const bannerImg = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('p');
const dots = document.querySelectorAll('.dot');

	// Mise à jour du bullet point actif
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected'); // Activation du point 
		} else {
			dot.classList.remove('dot_selected'); // Désactivation des autres points
		}
	});

	// Ajout de l'event listener sur la flèche droite
	rightArrow.addEventListener('click', function () {
	console.log("Flèche droite cliquée");
    });

	// Ajout de l'event listener sur la flèche droite
    leftArrow.addEventListener('click', function () {
    console.log("Flèche gauche cliquée"); 
    });

	
  	
    

