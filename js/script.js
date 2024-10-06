// Sticky Navbar
let header = document.querySelector('header');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Toggle menu icon
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

function createBubbles(section) {
    const bubbleCount = 10; // Adjust the number of bubbles per section

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Randomize bubble properties
        const size = Math.random() * 30 + 20; // Random size between 20px and 50px
        const left = Math.random() * 100; // Random horizontal position
        const animationDuration = Math.random() * 10 + 5; // Random duration between 5s and 15s

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${animationDuration}s`;
        
        section.appendChild(bubble);
    }
}

function addBubblesToAllSections() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.position = 'relative';
        section.style.overflow = 'hidden';
        createBubbles(section);
    });
}

// Call the function when the page loads
window.addEventListener('load', addBubblesToAllSections);


// Scroll reveal animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
