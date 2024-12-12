// Tableau des slides
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments nécessaires
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.querySelectorAll('.dot'); // Sélectionner tous les dots
let currentIndex = 0;  // Indice de l'image actuellement affichée

// Fonction pour changer l'image, le texte et mettre à jour les dots
function updateSlide(index) {
    // Mettre à jour l'image
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
    // Mettre à jour le texte
    bannerText.innerHTML = slides[index].tagLine;
    
    // Mettre à jour les dots : retirer la classe "dot_selected" de tous les dots
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    // Ajouter la classe "dot_selected" au dot correspondant
    dots[index].classList.add('dot_selected');
}

// Initialisation de l'affichage de la première image
updateSlide(currentIndex);

// Sélection des flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Event listener pour la flèche gauche (précédent)
arrowLeft.addEventListener('click', function() {
    console.log("Flèche gauche cliquée");
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;  // Passage à la slide précédente
    updateSlide(currentIndex);
});

// Event listener pour la flèche droite (suivant)
arrowRight.addEventListener('click', function() {
    console.log("Flèche droite cliquée");
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;  // Passage à la slide suivante
    updateSlide(currentIndex);
});