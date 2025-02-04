// navbar
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.pageYOffset > 0);
});

// side window
const toggleButton = document.getElementById('toggleButton');
const sideWindow = document.getElementById('sideWindow');
const closeButton = document.getElementById('closeButton');
const overlay = document.getElementById('overlay');

// Open/Close the side window when the toggle button is clicked
toggleButton.addEventListener('click', () => {
    sideWindow.classList.toggle('open');
    overlay.classList.toggle('active');
});

// Close the side window when the close button is clicked
closeButton.addEventListener('click', () => {
    sideWindow.classList.remove('open');
    overlay.classList.remove('active');
});

// Close the side window when clicking on the overlay
overlay.addEventListener('click', () => {
    sideWindow.classList.remove('open');
    overlay.classList.remove('active');
});

// Optional: Close side window when clicking outside (on document)
document.addEventListener('click', (event) => {
    if (!sideWindow.contains(event.target) && !toggleButton.contains(event.target) && !overlay.contains(event.target)) {
        sideWindow.classList.remove('open');
        overlay.classList.remove('active');
    }
});


// Hide the loader after the page is fully loaded
window.addEventListener('load', function () {
    const loader = document.querySelector('#loader');
    loader.style.display = 'none';
});