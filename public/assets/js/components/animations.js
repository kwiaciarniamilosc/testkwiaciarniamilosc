export function initAnimations() {
    // Initialize Intersection Observer for fade-in animations
    const animationObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    // Optional: Unobserve after animation
                    // animationObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: '50px'
        }
    );

    // Observe elements that should animate
    const animatedElements = document.querySelectorAll(
        '.feature, .service-card, .stat, .contact-info'
    );
    
    animatedElements.forEach(el => animationObserver.observe(el));

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    }

    // Add hover animations for service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('img')?.classList.add('hover');
        });

        card.addEventListener('mouseleave', function() {
            this.querySelector('img')?.classList.remove('hover');
        });
    });

    // Add smooth reveal for stats when in viewport
    const statsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCountAnimation(entry.target);
                    statsObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 1,
            rootMargin: '0px'
        }
    );

    document.querySelectorAll('.stat-number').forEach(stat => {
        statsObserver.observe(stat);
    });
}

// Helper function for number animation
function startCountAnimation(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = Math.ceil(target / (duration / 16)); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = current;
        }
    }, 16);
}

// Handle loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    document.querySelector('.hero')?.classList.add('loaded');
});

// Export additional animation utilities
export const fadeIn = (element, duration = 300) => {
    element.style.opacity = 0;
    element.style.display = 'block';

    let start = null;
    const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        element.style.opacity = Math.min(progress / duration, 1);

        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
};

export const fadeOut = (element, duration = 300) => {
    let start = null;
    const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        element.style.opacity = Math.max(1 - (progress / duration), 0);

        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            element.style.display = 'none';
        }
    };

    requestAnimationFrame(animate);
};