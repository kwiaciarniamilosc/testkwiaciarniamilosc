export function initStats() {
    const stats = [
        { element: '24/7', suffix: '', prefix: '' },
        { element: '100', suffix: '+', prefix: '' },
        { element: '5', suffix: '', prefix: '' }
    ];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stat = stats.find(s => s.element === entry.target.dataset.stat);
                    if (stat) {
                        animateStat(entry.target, stat);
                        observer.unobserve(entry.target);
                    }
                }
            });
        },
        {
            threshold: 0.5
        }
    );

    // Observe all stat elements
    document.querySelectorAll('.stat-number').forEach(el => {
        observer.observe(el);
    });
}

function animateStat(element, stat) {
    const target = parseInt(stat.element);
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const easeOutQuad = t => t * (2 - t);

    const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(easeOutQuad(progress) * target);

        if (frame === totalFrames) {
            element.textContent = `${stat.prefix}${target}${stat.suffix}`;
            clearInterval(counter);
        } else {
            element.textContent = `${stat.prefix}${currentCount}${stat.suffix}`;
        }
    }, frameDuration);
}

// Export utility functions
export const formatNumber = (number) => {
    return new Intl.NumberFormat('pl-PL').format(number);
};

export const animateValue = (start, end, duration = 2000) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        return value;
    };
    return new Promise(resolve => {
        window.requestAnimationFrame(step);
    });
};