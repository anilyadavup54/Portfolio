let currentSlide = 0;
const form = document.getElementById('contact-form');
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    const newTransformValue = -currentSlide * 100 + '%';
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue})`;
}

function moveSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// Auto slide every 3 seconds
setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 3000);

// Initialize carousel
showSlide(currentSlide);

//   <!-- Optional JavaScript for Validation or Submission -->
// Form validation or handling (Optional)

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission for now
    // You can add additional form validation here or submit via AJAX
    alert('Form submitted!');
    // Simulate form submission success
    form.reset();
});