// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form Validation for Contact Form
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
  
    let valid = true;
  
    // Check if fields are filled
    if (name.value.trim() === "") {
      valid = false;
      alert("Please enter your name");
    }
    if (email.value.trim() === "") {
      valid = false;
      alert("Please enter a valid email");
    }
    if (message.value.trim() === "") {
      valid = false;
      alert("Please enter your message");
    }
  
    if (valid) {
      alert("Thank you for contacting us, we will get back to you soon!");
      this.reset(); // Reset form fields
    }
  });
  
  // Event Highlights on Scroll
  window.addEventListener('scroll', function() {
    const eventCards = document.querySelectorAll('#events .card');
    const windowHeight = window.innerHeight;
    
    eventCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < windowHeight - 100) {
        card.classList.add('highlight');
      } else {
        card.classList.remove('highlight');
      }
    });
  });
  
  