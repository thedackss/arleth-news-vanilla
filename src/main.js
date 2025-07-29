// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current page navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (
            (currentPage === 'index.html' && href === '/') ||
            (currentPage === 'global.html' && href === '/global') ||
            (currentPage === 'tecnologia.html' && href === '/tecnologia') ||
            (currentPage === 'deportes.html' && href === '/deportes') ||
            (currentPage === 'politica.html' && href === '/politica')
        ) {
            link.classList.add('active');
        }
    });

    // Breaking news ticker animation
    const breakingNewsList = document.querySelector('.breaking-news ul');
    if (breakingNewsList) {
        let scrollAmount = 0;
        const scrollSpeed = 1;
        
        function scrollTicker() {
            scrollAmount += scrollSpeed;
            if (scrollAmount >= breakingNewsList.scrollWidth) {
                scrollAmount = -breakingNewsList.parentElement.offsetWidth;
            }
            breakingNewsList.style.transform = `translateX(-${scrollAmount}px)`;
            requestAnimationFrame(scrollTicker);
        }
        
        scrollTicker();
    }
});