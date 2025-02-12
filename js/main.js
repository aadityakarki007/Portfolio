// Initialize EmailJS
(function() {
    emailjs.init("mdnsCCcItbq9rRXzQ"); // Replace with your EmailJS public key
})();

// Typed.js Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    const typed = new Typed('#typed', {
        strings: [
            'A Passionate Web Developer',
            'A Software Engineer',
            'A Problem Solver'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true
    });

    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
        themeToggle.querySelector('i').classList.toggle('fa-sun');
        themeToggle.querySelector('i').classList.toggle('fa-moon');
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Navigation Link Update
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Project Filter
    const projectData = [
        {
            title: 'EventHub',
            description: 'A comprehensive event management platform with modern UI and interactive features',
            image: 'eventhub.png',
            category: 'frontend',
            demo: 'http://aadityakarki007.github.io/EventHub/',
            github: 'https://github.com/aadityakarki007/EventHub'
        },
        {
            title: 'Aaditya Foods',
            description: 'An online food delivery or ordering website lets customers easily browse menus, place orders, and get food delivered to their doorstep.',
            image: 'foods.png',
            category: 'frontend',
            demo: 'https://aadityakarki007.github.io/Aadityafoods/',
            github: 'https://github.com/aadityakarki007/Aadityafoods'
        },
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with React and Node.js',
            image: 'https://via.placeholder.com/400x300',
            category: 'fullstack',
            demo: '#',
            github: '#'
        },
        {
            title: 'Portfolio Website',
            description: 'Modern portfolio website with animations',
            image: 'portfol.png',
            category: 'frontend',
            demo: 'https://aadityakarki007.github.io/Portfolio/',
            github: 'https://github.com/aadityakarki007/Portfolio'
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function createProjectCard(project) {
        return `
            <div class="project-card" data-category="${project.category}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-links">
                        <a href="${project.demo}" class="btn primary" target="_blank">Live Demo</a>
                        <a href="${project.github}" class="btn secondary" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        `;
    }

    function filterProjects(category) {
        const projects = category === 'all' 
            ? projectData 
            : projectData.filter(project => project.category === category);
        
        projectsGrid.innerHTML = projects.map(createProjectCard).join('');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProjects(button.dataset.filter);
        });
    });

    // Initial project load
    filterProjects('all');

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.classList.add('loading');

        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_291kqy7', 'template_kid4ojn', templateParams)
            .then(function() {
                onFormSubmitSuccess();
                contactForm.reset();
            }, function(error) {
                showNotification('Failed to send message. Please try again.', 'error');
            })
            .finally(() => {
                submitButton.classList.remove('loading');
            });
    });

    // Function to show notification
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.querySelector('.contact').appendChild(notification);
        notification.classList.add('show');

        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Example usage after successful form submission
    function onFormSubmitSuccess() {
        showNotification('Message sent successfully!', 'success');
    }
});

// Theme toggle functionality
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme') || 
        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
            ? 'light' 
            : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

// Update theme toggle icon
function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-toggle i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initTheme);
