let slideIndex = 0;
const slides = document.querySelectorAll(".sliding_brands");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "flex" : "none"; // Show current slide
        dots[i].style.backgroundColor = (i === index) ? "#7e818c" : "#c8c9ce"; // Update dot color
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to first slide
    showSlide(slideIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index; // Set slide index based on clicked dot
        showSlide(slideIndex);
        
    });
});

// Start the slideshow
setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlide(slideIndex); // Initial display
