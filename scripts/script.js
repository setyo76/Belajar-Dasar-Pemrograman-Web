// Mobile menu toggle with animation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Typewriter effect for hero title
const typewriterText = 'Welcome to Setyo Dev';
const typewriterElement = document.getElementById('typewriter');
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (!isDeleting && charIndex < typewriterText.length) {
        typewriterElement.textContent = typewriterText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else if (!isDeleting && charIndex === typewriterText.length) {
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, 2000);
    } else if (isDeleting && charIndex > 0) {
        typewriterElement.textContent = typewriterText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, 50);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setTimeout(typeWriter, 500);
    }
}

// Start typewriter effect when page loads
window.addEventListener('load', () => {
    typeWriter();
});

// Skills data and generation using loop
const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 
    'Tailwind CSS', 'Bootstrap', 'Git', 'Responsive Design',
    'UI/UX Design', 'Web Accessibility', 'SEO Optimization'
];

const skillsGrid = document.getElementById('skillsGrid');

// Using loop to create skill items dynamically
for (let i = 0; i < skills.length; i++) {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.textContent = skills[i];
    
    // Add staggered animation delay
    skillItem.style.opacity = '0';
    skillItem.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        skillItem.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        skillItem.style.opacity = '1';
        skillItem.style.transform = 'translateY(0)';
    }, i * 100);
    
    skillsGrid.appendChild(skillItem);
}

// Projects slider implementation
const projects = [
    {
        title: 'Community Resource Hub',
        description: 'A web platform connecting students with educational resources and mentorship opportunities. Built with React and features a responsive design accessible to all devices.'
    },
    {
        title: 'Environmental Awareness Website',
        description: 'An interactive website promoting environmental consciousness among youth. Features data visualizations showing climate change impacts and actionable steps for positive change.'
    },
    {
        title: 'Student Portfolio Showcase',
        description: 'A collaborative platform where students showcase their coding projects and learn from each other. Encourages peer learning and celebrates student achievements.'
    },
    {
        title: 'Mental Health Support App',
        description: 'A responsive web application providing mental health resources and support for students. Features mood tracking, meditation guides, and connection to professional help.'
    }
];

const sliderContainer = document.getElementById('sliderContainer');
let currentSlide = 0;

// Generate project cards using loop
for (let i = 0; i < projects.length; i++) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h4>${projects[i].title}</h4>
        <p>${projects[i].description}</p>
    `;
    sliderContainer.appendChild(card);
}

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + projects.length) % projects.length;
    updateSlider();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % projects.length;
    updateSlider();
});

// Auto-slide every 5 seconds
let autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % projects.length;
    updateSlider();
}, 5000);

// Stop auto-slide when user interacts with slider
document.getElementById('prevBtn').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animation for articles
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all articles
document.querySelectorAll('article').forEach(article => {
    article.style.opacity = '0';
    article.style.transform = 'translateY(30px)';
    article.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(article);
});