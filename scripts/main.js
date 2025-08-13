// Kira Kira - Main JavaScript Functionality

// Global variables
let isMenuOpen = false;
let isGachaSpinning = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    console.log('🌟 Kira Kira - Kawaii Plush Store Initialized! ✨');
    
    // Initialize smooth scrolling for anchor links
    initializeSmoothScrolling();
    
    // Initialize header scroll effects
    initializeHeaderScrollEffects();
    
    // Initialize intersection observer for animations
    initializeIntersectionObserver();
    
    // Initialize category card interactions
    initializeCategoryCards();
    
    // Initialize newsletter form
    initializeNewsletterForm();
}

// Mobile menu toggle functionality
function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenu) {
        if (isMenuOpen) {
            mobileMenu.classList.add('active');
        } else {
            mobileMenu.classList.remove('active');
        }
    }
}

// Gacha spin functionality
function spinGacha() {
    if (isGachaSpinning) return;
    
    isGachaSpinning = true;
    
    const gachaBall = document.getElementById('gacha-ball');
    const gachaEmoji = document.getElementById('gacha-emoji');
    const gachaBtn = document.getElementById('gacha-spin-btn');
    const gachaBtnText = document.getElementById('gacha-btn-text');
    const gachaStatus = document.getElementById('gacha-status');
    
    // Update UI for spinning state
    gachaBall.classList.add('spinning');
    gachaEmoji.textContent = '🎲';
    gachaBtnText.textContent = 'Revealing Magic...';
    gachaStatus.textContent = '🎉 Something amazing is coming!';
    gachaBtn.disabled = true;
    
    // Add spinning icon to button
    const btnIcon = gachaBtn.querySelector('.btn-icon');
    if (btnIcon) {
        btnIcon.style.animation = 'spin 1s linear infinite';
    }
    
    // Simulate gacha result after 2 seconds
    setTimeout(() => {
        // Random result emojis
        const results = ['🧸', '🐾', '🌟', '💖', '🦄', '🐱', '🐻', '🌈', '✨', '🎁'];
        const randomResult = results[Math.floor(Math.random() * results.length)];
        
        // Update UI for result
        gachaBall.classList.remove('spinning');
        gachaEmoji.textContent = randomResult;
        gachaBtnText.textContent = 'Spin the Gacha!';
        gachaStatus.textContent = 'Congratulations! You got a magical surprise! ✨';
        gachaBtn.disabled = false;
        isGachaSpinning = false;
        
        // Reset button icon animation
        if (btnIcon) {
            btnIcon.style.animation = '';
        }
        
        // Add celebration effect
        createCelebrationEffect();
        
        // Reset status after 3 seconds
        setTimeout(() => {
            gachaStatus.textContent = 'Click to experience the magic of surprise!';
        }, 3000);
        
    }, 2000);
}

// Create celebration effect
function createCelebrationEffect() {
    const celebrationEmojis = ['🎉', '✨', '🌟', '💖', '🎊'];
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
            emoji.style.position = 'fixed';
            emoji.style.left = Math.random() * window.innerWidth + 'px';
            emoji.style.top = Math.random() * window.innerHeight + 'px';
            emoji.style.fontSize = '2rem';
            emoji.style.pointerEvents = 'none';
            emoji.style.zIndex = '9999';
            emoji.style.animation = 'float 2s ease-out forwards';
            
            document.body.appendChild(emoji);
            
            setTimeout(() => {
                document.body.removeChild(emoji);
            }, 2000);
        }, i * 100);
    }
}

// Initialize smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (isMenuOpen) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Initialize header scroll effects
function initializeHeaderScrollEffects() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add/remove blur effect based on scroll position
        if (currentScrollY > 50) {
            header.style.backdropFilter = 'blur(16px)';
            header.style.background = 'hsla(320, 30%, 98%, 0.9)';
        } else {
            header.style.backdropFilter = 'blur(12px)';
            header.style.background = 'hsla(320, 30%, 98%, 0.8)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Initialize intersection observer for animations
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('category-card') || 
                    entry.target.classList.contains('feature-card') ||
                    entry.target.classList.contains('commitment-card')) {
                    
                    const siblings = entry.target.parentElement.children;
                    const index = Array.from(siblings).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll(
        '.category-card, .feature-card, .commitment-card, .stat-item, .section-header'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize category card interactions
function initializeCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add extra sparkle effect on hover
            const sparkle = this.querySelector('.category-sparkle');
            if (sparkle) {
                sparkle.style.animation = 'sparkle 0.5s ease-in-out infinite';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const sparkle = this.querySelector('.category-sparkle');
            if (sparkle) {
                sparkle.style.animation = 'sparkle 2s ease-in-out infinite';
            }
        });
        
        // Add click interaction
        const exploreBtn = card.querySelector('.btn-kawaii');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const category = card.getAttribute('data-category');
                console.log(`🌟 Exploring ${category} category!`);
                
                // Add click effect
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // You could navigate to a category page here
                // window.location.href = `/category/${category}`;
            });
        }
    });
}

// Initialize newsletter form
function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = newsletterForm?.querySelector('.btn-secondary');
    
    if (newsletterForm && newsletterInput && newsletterBtn) {
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = newsletterInput.value.trim();
            
            if (!email) {
                showNotification('Please enter your email address! 📧', 'warning');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address! ✨', 'warning');
                return;
            }
            
            // Simulate form submission
            this.disabled = true;
            this.innerHTML = '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="3"/><path d="m12 1v6m0 6v6m6-12v6m-6 0h6m-6 0H6"/></svg>Subscribing...';
            
            setTimeout(() => {
                showNotification('Welcome to the Kira Kira family! 🌟✨', 'success');
                newsletterInput.value = '';
                this.disabled = false;
                this.innerHTML = '<svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>Subscribe';
            }, 1500);
        });
        
        // Enter key submission
        newsletterInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                newsletterBtn.click();
            }
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--card);
        color: var(--foreground);
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        box-shadow: var(--shadow-kawaii);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
        border-left: 4px solid ${type === 'success' ? 'var(--kawaii-green)' : type === 'warning' ? 'var(--kawaii-yellow)' : 'var(--kawaii-blue)'};
    `;
    
    // Add animation styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--muted-foreground);
                padding: 0;
                line-height: 1;
            }
            .notification-close:hover {
                color: var(--foreground);
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add some fun interaction effects
document.addEventListener('click', function(e) {
    // Add ripple effect to buttons
    if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
        const btn = e.target.classList.contains('btn') ? e.target : e.target.closest('.btn');
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            width: 0;
            height: 0;
        `;
        
        // Add ripple animation if not already present
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                        width: 20px;
                        height: 20px;
                        margin-left: -10px;
                        margin-top: -10px;
                    }
                }
                .btn {
                    position: relative;
                    overflow: hidden;
                }
            `;
            document.head.appendChild(style);
        }
        
        btn.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add some sparkle effects on scroll
let sparkleTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(sparkleTimeout);
    sparkleTimeout = setTimeout(() => {
        if (Math.random() > 0.8) { // 20% chance
            createRandomSparkle();
        }
    }, 100);
});

function createRandomSparkle() {
    const sparkleEmojis = ['✨', '🌟', '💫', '⭐'];
    const sparkle = document.createElement('div');
    sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
    sparkle.style.cssText = `
        position: fixed;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        font-size: 1.5rem;
        pointer-events: none;
        z-index: 9999;
        animation: sparkle 2s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentElement) {
            sparkle.remove();
        }
    }, 2000);
}

// Console welcome message
console.log(`
🌟✨ Welcome to Kira Kira! ✨🌟
   Where Comfort Meets Creativity
  
   Made with 💖 for plushie lovers
      everywhere! 🧸🌈
`);

// Export functions for global access
window.toggleMobileMenu = toggleMobileMenu;
window.spinGacha = spinGacha;