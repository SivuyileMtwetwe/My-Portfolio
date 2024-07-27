document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.querySelector('#preloader').style.display = 'none';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Theme toggle
    const themeToggle = document.getElementById('flexSwitchCheckDefault');
    const body = document.body;

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.progress-bar-fill');
    const animateSkills = () => {
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            if (barTop < window.innerHeight) {
                bar.style.width = bar.getAttribute('data-level') + '%';
            }
        });
    };

    window.addEventListener('scroll', animateSkills);

    // Project filter
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-tags').includes(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // Project modal
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('project-img');
    const captionText = document.getElementById('project-caption');
    const closeBtn = document.getElementsByClassName('close-btn')[0];
    const prevBtn = document.getElementById('prev-project-btn');
    const nextBtn = document.getElementById('next-project-btn');
    let currentProject = 0;

    projects.forEach((project, index) => {
        project.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = project.querySelector('img').src;
            captionText.innerHTML = project.querySelector('.overlay').innerHTML;
            currentProject = index;
            updateNavigationButtons();
        });
    });

    closeBtn.onclick = () => modal.style.display = 'none';

    prevBtn.addEventListener('click', () => {
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        updateModalContent();
    });

    nextBtn.addEventListener('click', () => {
        currentProject = (currentProject + 1) % projects.length;
        updateModalContent();
    });

    function updateModalContent() {
        modalImg.src = projects[currentProject].querySelector('img').src;
        captionText.innerHTML = projects[currentProject].querySelector('.overlay').innerHTML;
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentProject === 0;
        nextBtn.disabled = currentProject === projects.length - 1;
    }

    // Form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            // Here you would typically send the form data to a server
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value.trim() === '') {
            setErrorFor(name, 'Name cannot be blank');
            isValid = false;
        } else {
            setSuccessFor(name);
        }

        if (email.value.trim() === '') {
            setErrorFor(email, 'Email cannot be blank');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            setErrorFor(email, 'Email is not valid');
            isValid = false;
        } else {
            setSuccessFor(email);
        }

        if (message.value.trim() === '') {
            setErrorFor(message, 'Message cannot be blank');
            isValid = false;
        } else {
            setSuccessFor(message);
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const formGroup = input.parentElement;
        const small = formGroup.querySelector('small');

        small.innerText = message;
        formGroup.className = 'form-group error';
    }

    function setSuccessFor(input) {
        const formGroup = input.parentElement;
        formGroup.className = 'form-group success';
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Initialize AOS
    AOS.init();

    // Skills chart
    const ctx = document.getElementById('skills-chart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Angular', 'MongoDB'],
            datasets: [{
                label: 'Skill Level',
                data: [50, 85, 80, 75, 70, 65],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Map initialization (using Mapbox)
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40], // Default coordinates
        zoom: 9
    });

    // Add marker to map
    new mapboxgl.Marker()
        .setLngLat([-74.5, 40])
        .addTo(map);

    // Typed.js for landing page
    new Typed('#typed-output', {
        strings: ['Web Developer', 'MEAN Stack Developer', 'UI/UX Enthusiast'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // GitHub activity feed
    function fetchGitHubActivity() {
        // Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
        fetch('https://github.com/users/sivuyilemtwetwe/events/public')
            .then(response => response.json())
            .then(data => {
                const activityFeed = document.querySelector('.github-feed');
                data.slice(0, 5).forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.className = 'github-event';
                    eventElement.textContent = `${event.type} on ${new Date(event.created_at).toLocaleDateString()}`;
                    activityFeed.appendChild(eventElement);
                });
            })
            .catch(error => console.error('Error fetching GitHub activity:', error));
    }

    fetchGitHubActivity();

    // 3D Skills Cube
    function initSkillsCube() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(200, 200);
        document.getElementById('skills-cube').appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();
    }

    initSkillsCube();
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  