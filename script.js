/**
 * Main JavaScript file for Islam Güven's personal website
 * Handles navigation, scrolling, and responsive behaviors
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('#main-nav ul');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            menuToggle.classList.toggle('active');
            
            // Transform hamburger to X when active
            if (menuToggle.classList.contains('active')) {
                menuToggle.querySelector('.bar:nth-child(1)').style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                menuToggle.querySelector('.bar:nth-child(2)').style.opacity = '0';
                menuToggle.querySelector('.bar:nth-child(3)').style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                menuToggle.querySelector('.bar:nth-child(1)').style.transform = 'none';
                menuToggle.querySelector('.bar:nth-child(2)').style.opacity = '1';
                menuToggle.querySelector('.bar:nth-child(3)').style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('show');
                
                if (menuToggle.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    menuToggle.querySelector('.bar:nth-child(1)').style.transform = 'none';
                    menuToggle.querySelector('.bar:nth-child(2)').style.opacity = '1';
                    menuToggle.querySelector('.bar:nth-child(3)').style.transform = 'none';
                }
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get the height of the fixed navbar
                const navHeight = document.getElementById('main-nav').offsetHeight;
                
                // Calculate the position to scroll to (offset by navbar height)
                const targetPosition = targetElement.offsetTop - navHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active section in navigation
    function highlightActiveSection() {
        const scrollPosition = window.scrollY;
        
        // Get the height of the fixed navbar
        const navHeight = document.getElementById('main-nav').offsetHeight;
        
        // Find which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 50; // 50px offset for better UX
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Get the id of the current section
                const sectionId = section.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to the corresponding link
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Add scroll event listener for highlighting active section
    window.addEventListener('scroll', highlightActiveSection);
    
    // Initial call to highlight the active section on page load
    highlightActiveSection();
    
    // Handle window resize events
    window.addEventListener('resize', function() {
        // If window is resized to desktop width and mobile menu was open, reset menu
        if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            
            if (menuToggle.classList.contains('active')) {
                menuToggle.classList.remove('active');
                menuToggle.querySelector('.bar:nth-child(1)').style.transform = 'none';
                menuToggle.querySelector('.bar:nth-child(2)').style.opacity = '1';
                menuToggle.querySelector('.bar:nth-child(3)').style.transform = 'none';
            }
        }
    });
    
    // Add animation to section when it comes into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
