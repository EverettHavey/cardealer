document.addEventListener('DOMContentLoaded', () => {
    // 1. Hamburger Menu Toggle Logic
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            // Toggles the 'open' class on the menu element
            mobileMenu.classList.toggle('open');
            // Optional: Toggle an ARIA attribute for accessibility
            const isExpanded = mobileMenu.classList.contains('open');
            hamburgerBtn.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when a link is clicked (common mobile pattern)
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                hamburgerBtn.setAttribute('aria-expanded', false);
            });
        });
    }

    // --- Placeholder for other page-specific interactivity ---

    // 2. Vehicle View Page (vehicleview.html) - Image Gallery Logic
    const mainImage = document.getElementById('main-vehicle-image');
    const thumbnails = document.querySelectorAll('.thumbnail-previews img');

    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Change the main image source (requires different image paths)
                // In this simplified example, we'll just swap the 'src'
                // mainImage.src = thumb.src;
                
                // Realistic: Swap a data-full-size attribute
                // mainImage.src = thumb.dataset.fullsize; 
                
                // For the provided HTML structure, we'll just use a console log
                console.log("Image updated to:", thumb.alt);
                
                // Add an 'active' class to the clicked thumbnail for styling
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });
    }

    // 3. Vehicle View Page - Tab Functionality
    const tabButtons = document.querySelectorAll('.spec-tab');
    const tabContents = document.querySelectorAll('.detailed-specs-tabs .tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' to the clicked button
            button.classList.add('active');

            // Find the corresponding content and show it
            const targetId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});