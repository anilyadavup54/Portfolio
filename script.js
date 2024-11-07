let currentSlide = 0;
const form = document.getElementById('contact-form');
//   <!-- Optional JavaScript for Validation or Submission -->
// Form validation or handling (Optional)

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission for now
    // You can add additional form validation here or submit via AJAX
    alert('Form submitted!');
    // Simulate form submission success
    form.reset();
});
