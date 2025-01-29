document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const carouselImages = document.querySelector('.carousel-images');
    const images = carouselImages.querySelectorAll('img');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    const totalImages = images.length;
    let currentIndex = 0;
    let autoSlideInterval;

    // Função para mover o carrossel
    function moveCarousel(index) {
        currentIndex = (index + totalImages) % totalImages; // Permite loop infinito
        const offset = -currentIndex * 100; // Calcula deslocamento
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    // Avançar para o próximo slide
    function nextSlide() {
        moveCarousel(currentIndex + 1);
    }

    // Voltar para o slide anterior
    function prevSlide() {
        moveCarousel(currentIndex - 1);
    }

    // Alternância automática
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    // Parar alternância automática
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Botões de controle
    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Inicia o carrossel automático
    startAutoSlide();
});
