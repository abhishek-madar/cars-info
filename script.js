document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('fa-times');
    });
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('fa-times');
        });
    });
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const carCards = document.querySelectorAll('.car-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            carCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.padding = '15px 0';
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        }
        
        animateOnScroll();
    });
    
    function animateOnScroll() {
        const elements = document.querySelectorAll('.section-title, .cars-grid, .brands-container, .reviews-container, .filter-buttons, .hero, .car-count, .car-card, .brand-card, .review-card');
        
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('visible');
            }
        });
    }
    
    setTimeout(() => {
        animateOnScroll();
    }, 100);
    
    function staggerAnimation(elements, delay) {
        elements.forEach((el, index) => {
            setTimeout(() => {
                if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                    el.classList.add('visible');
                }
            }, index * delay);
        });
    }
    
    setTimeout(() => {
        const carCards = document.querySelectorAll('.car-card');
        const brandCards = document.querySelectorAll('.brand-card');
        const reviewCards = document.querySelectorAll('.review-card');
        
        staggerAnimation(carCards, 50);
        staggerAnimation(brandCards, 100);
        staggerAnimation(reviewCards, 100);
    }, 300);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const carCount = document.querySelector('.car-count');
    setTimeout(() => {
        carCount.classList.add('visible');
    }, 800);
    
    const lamborghiniBadges = document.querySelectorAll('.car-badge.lamborghini');
    lamborghiniBadges.forEach(badge => {
        badge.innerHTML = '🐂 LAMBORGHINI';
        badge.style.fontWeight = '900';
        badge.style.letterSpacing = '2px';
    });
    
    const brandLogos = document.querySelectorAll('.brand-logo .fa-bull');
    brandLogos.forEach(logo => {
        logo.style.color = '#FFD700';
        logo.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.5)';
        logo.style.fontSize = '3.5rem';
    });
});