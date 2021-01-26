const cardTransform = () => {
    const serviceCard = document.querySelector('#services .service-summary .card');
    const moreInfo = document.querySelectorAll('#services .service-summary .card .moreInfo');
    const cardImg = document.querySelectorAll('#services .service-summary .card img')

    // serviceCard.addEventListener('mouseover', () => {
        
    // });
}

cardTransform();

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animate
        burger.classList.toggle('toggle');
    });
    
}

navSlide();