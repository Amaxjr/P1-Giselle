// script.js (o mesmo do primeiro exemplo)
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicadores = document.querySelectorAll('.indicador');

function mostrarSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    
    slides.forEach(slide => {
        slide.classList.remove('ativo');
    });
    
    indicadores.forEach(ind => {
        ind.classList.remove('ativo');
    });
    
    slides[slideIndex].classList.add('ativo');
    indicadores[slideIndex].classList.add('ativo');
    
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 100}%)`;
}

function mudarSlide(n) {
    slideIndex += n;
    mostrarSlide(slideIndex);
}

function irParaSlide(n) {
    slideIndex = n;
    mostrarSlide(slideIndex);
}

// Autoplay (opcional)
setInterval(() => {
    mudarSlide(1);
}, 5000);

mostrarSlide(slideIndex);