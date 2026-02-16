document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu');

    if (menuBtn && mobileMenu && closeMenuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });

        // Close menu when clicking outside
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.add('translate-x-full');
            }
        })
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
            header.classList.add('bg-transparent');
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example Cart Counter Interaction
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    let count = 0;

    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            if (cartCount) {
                cartCount.textContent = count;
                cartCount.classList.remove('hidden');

                // Simple animation
                cartCount.classList.add('scale-125');
                setTimeout(() => cartCount.classList.remove('scale-125'), 200);
            }

            // Show toast notification (simple implementation)
            showToast('Item added to cart');
        });
    });
});

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-20 opacity-0 z-50';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-20', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
