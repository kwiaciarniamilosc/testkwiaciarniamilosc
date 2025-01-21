// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initBlogPost();
});

function initBlogPost() {
    initShareButtons();
    initImageZoom();
    initScrollEffects();
    initTableOfContents();
    initRelatedPosts();
}

// Share Functionality
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const platform = button.dataset.platform;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            
            let shareUrl;
            switch(platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'instagram':
                    // Instagram doesn't support direct sharing via URL
                    return;
                case 'tiktok':
                    // TikTok doesn't support direct sharing via URL
                    return;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// Image Zoom Functionality
function initImageZoom() {
    const postImages = document.querySelectorAll('.post img:not(.author-avatar)');
    
    postImages.forEach(img => {
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.className = 'image-overlay';
            
            const image = document.createElement('img');
            image.src = img.src;
            image.alt = img.alt;
            image.className = 'zoomed-image';
            
            overlay.appendChild(image);
            document.body.appendChild(overlay);
            
            setTimeout(() => overlay.classList.add('active'), 10);
            
            overlay.addEventListener('click', () => {
                overlay.classList.remove('active');
                setTimeout(() => overlay.remove(), 300);
            });
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    const header = document.querySelector('.blog-post-header');
    const sidebar = document.querySelector('.sidebar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Parallax effect for header
        if (header && currentScroll < header.offsetHeight) {
            header.style.backgroundPositionY = `${currentScroll * 0.5}px`;
        }
        
        // Update last scroll position
        lastScroll = currentScroll;
    });
}

// Table of Contents
function initTableOfContents() {
    const headings = document.querySelectorAll('.post h2');
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    
    if (headings.length > 2) {
        const title = document.createElement('h3');
        title.textContent = 'Spis treści';
        toc.appendChild(title);
        
        const list = document.createElement('ul');
        headings.forEach((heading, index) => {
            const id = `section-${index}`;
            heading.id = id;
            
            const item = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = heading.textContent;
            
            item.appendChild(link);
            list.appendChild(item);
        });
        
        toc.appendChild(list);
        const post = document.querySelector('.post');
        post.insertBefore(toc, post.firstChild);
    }
}

// Related Posts Slider
function initRelatedPosts() {
    const slider = document.querySelector('.related-posts-grid');
    if (!slider) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}

// Export utilities if needed
export const blogPostUtils = {
    refreshPost: initBlogPost,
    sharePost: (platform) => {
        // Add custom sharing logic here
    }
};