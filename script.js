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
      }, 100); // Adjust the delay if needed
    });
  
    // Landing Page Animation
    const landingSection = document.getElementById('landing');
    setTimeout(() => {
      landingSection.classList.add('show');
    }, 500); // Adjust the delay if needed
  
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
    const modalImages = document.querySelectorAll('.project-gallery img');
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('project-img');
    const captionText = document.getElementById('project-caption');
    let currentImageIndex = 0;
  
    modalImages.forEach((img, index) => {
      img.onclick = function() {
        modal.style.display = "block";
        setTimeout(() => modal.classList.add('show'), 10);
        currentImageIndex = index;
        updateModalImage();
      }
    });
  
    function updateModalImage() {
      modalImg.src = modalImages[currentImageIndex].src;
      const project = modalImages[currentImageIndex].closest('.project');
      const overlay = project.querySelector('.overlay');
      captionText.innerHTML = overlay.innerHTML;
    }
  
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    function closeModal() {
      modal.classList.remove('show');
      setTimeout(() => modal.style.display = "none", 500);
    }
  
    // Add "Next" and "Previous" buttons to the modal HTML
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.addEventListener('click', showNextImage);
    modal.appendChild(nextBtn);
  
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Prev';
    prevBtn.addEventListener('click', showPrevImage);
    modal.appendChild(prevBtn);
  
    function showNextImage() {
      currentImageIndex = (currentImageIndex + 1) % modalImages.length;
      updateModalImage();
    }
  
    function showPrevImage() {
      currentImageIndex = (currentImageIndex - 1 + modalImages.length) % modalImages.length;
      updateModalImage();
    }
  
    // Contact Form Validation and Submission
    window.addEventListener('load', () => {
        // ... (other parts of the script.js code remain the same) ...
      
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
            // Actual Form Submission using Fetch API
            const formData = {
              name: name,
              email: email,
              message: message
            };
      
            fetch('your-form-submission-endpoint-url', { // Replace with your actual endpoint
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
            })
            .then(response => {
              if (response.ok) { // If the response is successful (status code 200-299)
                form.reset();
                showSuccessMessage('Your message has been sent.');
              } else {
                showError('message', 'There was an error sending your message.');
              }
            })
            .catch(error => {
              showError('message', 'There was an error sending your message.');
              console.error('Error:', error); // Log the error for debugging
            });
          }
        });
       
      
        // ... (Other helper functions - validateEmail, showError, clearError - remain the same)
      
        // New helper function to display the success message
        function showSuccessMessage(message) {
            const successMessage = document.createElement('div');
            successMessage.textContent = message;
            successMessage.classList.add('success-message');
            form.appendChild(successMessage);
      
            setTimeout(() => {
              successMessage.remove();
            }, 5000); // Remove after 5 seconds
        }
      
      });
      
    // ... (Form validation code from the previous response) ...
  
    // Theme Toggle
    // ... (Theme toggle code from the previous response) ...
  
    // ... (Other JavaScript code for smooth scrolling, skills, projects, etc.) ...

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for user preference in localStorage
const isDarkMode = localStorage.getItem('theme') === 'dark';
if (isDarkMode) {
  body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update and save theme preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

    // Parallax Scrolling Effect 
    const parallaxElements = document.querySelectorAll('.parallax');
  
    window.addEventListener('scroll', () => {
      parallaxElements.forEach(el => {
        const speed = el.dataset.parallaxSpeed || 0.5;
        const yPos = -((window.scrollY - el.offsetTop) * speed);
        el.style.backgroundPositionY = yPos + 'px';
      });
    });
  
  
    // Timeline Animation
    // ... (Timeline animation code from the previous response) ...

    // ... (Other JavaScript code for smooth scrolling, skills, projects, etc.) ...

// Timeline Animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline .container');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the item is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing after animation
            } 
        });
    }, options);

    timelineItems.forEach((item) => {
        observer.observe(item);
    });
}

animateTimeline(); // Call the function on page load

  });
  