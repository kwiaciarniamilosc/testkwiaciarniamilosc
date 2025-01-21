// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initBlog();
});

function initBlog() {
    initCategoryFilter();
    initLazyLoading();
    initImageZoom();
    initShareButtons();
}

// Category Filter Functionality
function initCategoryFilter() {
    const categoryTags = document.querySelectorAll('.category-tag');
    const blogCards = document.querySelectorAll('.blog-card');

    categoryTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all tags
            categoryTags.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tag
            tag.classList.add('active');
            
            // Get category from data attribute
            const category = tag.dataset.category;
            
            // Filter blog cards
            filterBlogCards(category);
        });
    });

    function filterBlogCards(category) {
        blogCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = '';
                setTimeout(() => card.classList.add('animate'), 10);
            } else {
                card.style.display = 'none';
                card.classList.remove('animate');
            }
        });
    }
}

// Lazy Loading Images
function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Image Zoom Functionality
function initImageZoom() {
    const blogImages = document.querySelectorAll('.blog-card img');
    
    blogImages.forEach(img => {
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.className = 'image-overlay';
            
            const imgClone = img.cloneNode();
            imgClone.className = 'zoomed-image';
            
            overlay.appendChild(imgClone);
            document.body.appendChild(overlay);
            
            setTimeout(() => overlay.classList.add('active'), 10);
            
            overlay.addEventListener('click', () => {
                overlay.classList.remove('active');
                setTimeout(() => overlay.remove(), 300);
            });
        });
    });
}

// Share Buttons
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const url = window.location.href;
            const title = document.title;
            const platform = button.dataset.platform;
            
            let shareUrl;
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                    break;
                case 'pinterest':
                    shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`;
                    break;
            }
            
            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle loading states
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Export utilities if needed
export const blogUtils = {
    filterBlogCards: (category) => filterBlogCards(category),
    refreshBlog: () => initBlog()
};