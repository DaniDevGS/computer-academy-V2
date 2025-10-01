document.addEventListener('DOMContentLoaded', function() {
    // 1. Código del sidebar
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.sidebar-overlay');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // 2. Animación de fondo
    const backgroundBox = document.querySelector('.hero');
    const images = [
        'src/assets/img/Fondo/img-1.jpeg',
        'src/assets/img/Fondo/img-2.jpeg',
    ];

    

    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        backgroundBox.style.backgroundImage = 
            `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${images[currentIndex]}')`;
    }

    // Iniciar animación
    setInterval(changeBackground, 5000);

    console.log(changeBackground);
});