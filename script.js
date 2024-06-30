window.addEventListener('load', () => {
    const smoothScrollLinks = document.querySelectorAll('nav a[href^="#"], #projects a[href^="#"]');
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
  
    const progressBars = document.querySelectorAll('.skill-bar');
    const progressBarOptions = {
      root: null,
      threshold: 0.5, 
    };
  
    const progressBarObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const fill = bar.querySelector('.skill-bar-fill');
          const level = bar.dataset.level;
          fill.style.width = level + '%';
          bar.classList.add('show'); 
          progressBarObserver.unobserve(bar); 
        }
      });
    }, progressBarOptions);
  
    progressBars.forEach(bar => progressBarObserver.observe(bar));
  
    const landingSection = document.getElementById('landing');
    setTimeout(() => {
        landingSection.classList.add('show');
    }, 500);
  
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projects = document.querySelectorAll('.project');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            projects.forEach(project => {
                const projectTags = project.dataset.tags.split(',');
                project.style.display = filterValue === 'all' || projectTags.includes(filterValue) ? 'block' : 'none';
            });
        });
    });
  
    const modalImages = document.querySelectorAll('.project-gallery img');
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('project-img');
    const captionText = document.getElementById('project-caption');
    let currentImageIndex = 0;
  
    modalImages.forEach((img, index) => {
        img.onclick = () => {
            modal.style.display = "block";
            setTimeout(() => modal.classList.add('show'), 10);
            currentImageIndex = index;
            updateModalImage();
        };
    });
  
    function updateModalImage() {
        modalImg.src = modalImages[currentImageIndex].src;
        const project = modalImages[currentImageIndex].closest('.project');
        const overlay = project.querySelector('.overlay');
        captionText.innerHTML = overlay.innerHTML;
        prevBtn.disabled = currentImageIndex === 0;
        nextBtn.disabled = currentImageIndex === modalImages.length - 1;
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
            const formData = { name, email, message };
            fetch('your-form-submission-endpoint-url', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    if (response.ok) {
                        form.reset();
                        showSuccessMessage('Your message has been sent.');
                    } else {
                        showError('message', 'There was an error sending your message.');
                    }
                })
                .catch(error => {
                    showError('message', 'There was an error sending your message.');
                    console.error('Error:', error); 
                });
        }
    });
  
    function showError(field, message) {
        const fieldElement = document.getElementById(field);
        const errorMessage = fieldElement.nextElementSibling;
        fieldElement.classList.add('error');
        errorMessage.textContent = message;
    }
  
    function clearError(field) {
        const fieldElement = document.getElementById(field);
        const errorMessage = fieldElement.nextElementSibling;
        fieldElement.classList.remove('error');
        errorMessage.textContent = '';
    }
  
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
  
    function showSuccessMessage(message) {
        const successMessage = document.createElement('div');
        successMessage.textContent = message;
        successMessage.classList.add('success-message');
        form.appendChild(successMessage);
        setTimeout(() => successMessage.remove(), 5000); 
    }
  
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const isDarkMode = localStorage.getItem('theme') === 'dark';
  
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }
  
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const speed = el.dataset.parallaxSpeed || 0.5;
            const yPos = -((window.scrollY - el.offsetTop) * speed);
            el.style.backgroundPositionY = yPos + 'px';
        });
    });
  
    function animateTimeline() {
        const timelineItems = document.querySelectorAll('.timeline .container');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, 
        };
  
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
  
        timelineItems.forEach((item) => {
            observer.observe(item);
        });
    }
  
    animateTimeline();
  
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
  
    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
  
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#4CAF50" 
            }
        },
    });
  
    document.addEventListener('keydown', (event) => {
        if (modal.style.display === "block") { 
            if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'Escape') {
                closeModal();
            }
        }
    });
  });
  
  AOS.init();
  
  const skillsChart = document.getElementById('skills-chart').getContext('2d');
  
  const myChart = new Chart(skillsChart, {
      type: 'bar',
      data: {
          labels: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'],
          datasets: [{
              label: 'Skill Level',
              data: [90, 85, 80, 75, 70], 
              backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(75, 192, 192, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  