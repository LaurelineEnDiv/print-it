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

let initSlide = 0; // La première diapositive est active au début

// Fonction pour mettre à jour le carrousel
function updateSlide(index) {
	// Mettre à jour l'image et la tagline
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	bannerTagline.innerHTML = slides[index].tagLine;

	// Mettre à jour le bullet point actif
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected'); // Activer le point courant
		} else {
			dot.classList.remove('dot_selected'); // Désactiver les autres points
		}
	});
}

// Ajout de l'event listener sur la flèche droite
rightArrow.addEventListener('click', function () {
//console.log("Flèche droite cliquée");
	
// Gestion du clic sur la flèche droite
initSlide = (initSlide + 1) % slides.length; // Passer à la slide suivante
updateSlide(initSlide);
});

// Ajout de l'event listener sur la flèche droite
leftArrow.addEventListener('click', function () {
//console.log("Flèche gauche cliquée"); 
		
// Gestion du clic sur la flèche droite
initSlide = (initSlide - 1 + slides.length) % slides.length; // Revenir à la slide précédente
updateSlide(initSlide);
});

// Initialisation du carrousel avec la première slide
updateSlide(initSlide);

	
  	
    

