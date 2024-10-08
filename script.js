document.getElementById("menuIcon").addEventListener("click", function() {
    const headerLinks = document.getElementById("header-right");
    headerLinks.classList.toggle("active"); 
});





document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.fade-1');
    

    const options = {
        root: null, // Use the viewport as the container
        threshold: 0.1 // Trigger when 10% of the image is visible
    };

    const callback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = index * 200; // Delay for each image (200ms per index)
                setTimeout(() => {
                    entry.target.style.opacity = '1'; // Fade in
                    entry.target.style.transform = 'translateY(0)'; // Move to original position
                }, delay);
                observer.unobserve(entry.target); // Stop observing the current target
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    imageContainers.forEach(container => {
        observer.observe(container); // Observe each image container
    });
});

