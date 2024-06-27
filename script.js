window.addEventListener('load', () => {
    // Smooth Scrolling for Navigation and Project Links
    document.querySelectorAll('nav a[href^="#"], #projects a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  
    // Skill Bar Animation
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      const fill = bar.querySelector('.skill-bar-fill');
      const level = bar.dataset.level;
      setTimeout(() => {
        fill.style.width = level + '%';
      }, 100);
    });
  
    // Landing Page Animation
    const landingSection = document.getElementById('landing');
    setTimeout(() => {
      landingSection.classList.add('show');
    }, 500);
  
    // Project Gallery Filtering
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projects = document.querySelectorAll('.project');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.dataset.filter;
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        projects.forEach(project => {
          const projectTags = project.dataset.tags.split(',');
          if (filterValue === 'all' || projectTags.includes(filterValue)) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });
  
    // Project Gallery Lightbox
    const projectImages = document.querySelectorAll('.project img');
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('project-img');
    const captionText = document.getElementById('project-caption');
  
    projectImages.forEach(img => {
      img.onclick = function() {
        modal.style.display = "block";
        setTimeout(() => {
          modal.classList.add('show');
        }, 10);
        modalImg.src = this.src;
        const project = this.closest('.project');
        const overlay = project.querySelector('.overlay');
        captionText.innerHTML = overlay.innerHTML; // Use overlay content for caption
      }
    });
  
    const closeBtn = document.getElementsByClassName("close-btn")[0];
    closeBtn.onclick = function() {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    }
  
    // Contact Form Validation and Submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      let isValid = true;
  
      if (name === '') {
        showError('name', 'Name is required');
        isValid = false;
      } else {
        clearError('name');
      }
  
      if (!validateEmail(email)) {
        showError('email', 'Invalid email address');
        isValid = false;
      } else {
        clearError('email');
      }
  
      if (message === '') {
        showError('message', 'Message is required');
        isValid = false;
      } else {
        clearError('message');
      }
  
      if (isValid) {
        // Replace this with your actual form submission logic (e.g., using Fetch API or AJAX)
        alert('Message sent successfully!'); 
        form.reset();
  
        // Display success message
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Your message has been sent.';
        successMessage.classList.add('success-message');
        form.appendChild(successMessage);
  
        // Optionally, remove the success message after a few seconds
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }
    });
  
    // Helper Functions
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  
    function showError(inputId, message) {
      const inputField = document.getElementById(inputId);
      const errorElement = document.createElement('div');
      errorElement.textContent = message;
      errorElement.classList.add('error-message');
      inputField.parentNode.insertBefore(errorElement, inputField.nextSibling);
      inputField.classList.add('error');
    }
  
    function clearError(inputId) {
      const inputField = document.getElementById(inputId);
      const errorElement = inputField.parentNode.querySelector('.error-message');
      if (errorElement) {
        errorElement.remove();
        inputField.classList.remove('error');
      }
    }
  
    // Theme Toggle
    // ... (Theme toggle code from the previous response) ...
  
    // Timeline Animation
    // ... (Timeline animation code from the previous response) ...
  });
  
  // ... (previous code) ...

// Parallax Scrolling Effect (with optimization)
const parallaxElements = document.querySelectorAll('.parallax'); // Add parallax class to elements in HTML
window.addEventListener('scroll', () => {
  parallaxElements.forEach(el => {
    const speed = el.dataset.parallaxSpeed || 0.5; // Default speed is 0.5
    const yPos = -((window.scrollY - el.offsetTop) * speed);
    el.style.backgroundPositionY = yPos + 'px';
  });
});

// ... (lightbox code from previous response) ...

// Modal Navigation
const modalImages = document.querySelectorAll('.project-gallery img');
let currentImageIndex = 0;
modal.addEventListener('click', (event) => {
  if (event.target === modal) { // Check if clicking outside the content
    closeModal();
  }
});

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % modalImages.length;
  updateModalImage();
}

function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + modalImages.length) % modalImages.length;
  updateModalImage();
}

function updateModalImage() {
  modalImg.src = modalImages[currentImageIndex].src;
  const project = modalImages[currentImageIndex].closest('.project');
  const overlay = project.querySelector('.overlay');
  captionText.innerHTML = overlay.innerHTML;
}

// Add "Next" and "Previous" buttons to the modal HTML 
// and add event listeners to call showNextImage() and showPrevImage()

// ... (Rest of the script.js code)

