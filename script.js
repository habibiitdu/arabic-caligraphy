// Calligraphy Portfolio Data
const portfolioData = [
    {
        id: 1,
        title: "Elegant Flourishes",
        description: "A masterful display of traditional copperplate script featuring intricate flourishes and delicate line variations. This piece showcases the timeless beauty of classical calligraphy with modern sensibilities.",
        image: "samples/1.jpeg",
        category: "traditional",
        size: "12 × 16",
        sizeCategory: "medium"
    },
    {
        id: 2,
        title: "Modern Minimalism",
        description: "Clean, contemporary lettering that emphasizes simplicity and elegance. This piece demonstrates how modern calligraphy can convey sophistication through restrained design and perfect spacing.",
        image: "samples/2.jpeg",
        category: "modern",
        size: "10 × 14",
        sizeCategory: "small"
    },
    {
        id: 3,
        title: "Gothic Grandeur",
        description: "A stunning example of blackletter script that pays homage to medieval manuscript traditions. Rich, bold strokes create a powerful visual impact while maintaining perfect readability.",
        image: "samples/3.jpeg",
        category: "traditional",
        size: "16 × 20",
        sizeCategory: "medium"
    },
    {
        id: 4,
        title: "Decorative Dreams",
        description: "An ornate piece featuring elaborate decorative elements and gold leaf accents. This work combines traditional techniques with contemporary artistic vision to create a truly unique masterpiece.",
        image: "samples/4.jpg",
        category: "decorative",
        size: "14 × 18",
        sizeCategory: "medium"
    },
    {
        id: 5,
        title: "Flowing Grace",
        description: "Graceful italic script that dances across the page with fluid movements. Each letter flows seamlessly into the next, creating a harmonious rhythm that captivates the viewer.",
        image: "samples/5.jpeg",
        category: "traditional",
        size: "18 × 24",
        sizeCategory: "large"
    },
    {
        id: 6,
        title: "Contemporary Expression",
        description: "Bold, expressive brush lettering that pushes the boundaries of modern calligraphy. This piece explores the intersection of art and writing, creating a powerful emotional impact.",
        image: "samples/6.jpeg",
        category: "modern",
        size: "20 × 26",
        sizeCategory: "large"
    },
    {
        id: 7,
        title: "Vintage Charm",
        description: "A nostalgic piece inspired by vintage signage and typography. Weathered textures and classic proportions evoke memories of bygone eras while maintaining contemporary appeal.",
        image: "samples/7.jpeg",
        category: "decorative",
        size: "12 × 15",
        sizeCategory: "medium"
    },
    {
        id: 8,
        title: "Romantic Script",
        description: "Delicate, romantic lettering perfect for wedding invitations and love letters. Soft curves and gentle flourishes create an atmosphere of romance and elegance.",
        image: "samples/8.jpeg",
        category: "traditional",
        size: "11 × 14",
        sizeCategory: "small"
    },
    {
        id: 9,
        title: "Bold Statement",
        description: "Powerful, modern lettering that commands attention. Strong contrasts and dynamic compositions make this piece perfect for branding and impactful communications.",
        image: "samples/9.jpeg",
        category: "modern",
        size: "16 × 22",
        sizeCategory: "medium"
    },
    {
        id: 10,
        title: "Classic Elegance",
        description: "Timeless copperplate script executed with precision and grace. This piece represents the pinnacle of traditional calligraphy craftsmanship and attention to detail.",
        image: "samples/10.jpeg",
        category: "traditional",
        size: "10 × 12",
        sizeCategory: "small"
    },
    {
        id: 11,
        title: "Ornamental Beauty",
        description: "Richly decorated lettering featuring intricate borders and ornamental elements. This piece showcases the artist's ability to balance decoration with legibility.",
        image: "samples/11.jpeg",
        category: "decorative",
        size: "22 × 28",
        sizeCategory: "large"
    },
    {
        id: 12,
        title: "Minimalist Modern",
        description: "Clean, geometric lettering that embraces negative space and modern design principles. This piece proves that sometimes less truly is more in the world of calligraphy.",
        image: "samples/12.jpeg",
        category: "modern",
        size: "14 × 16",
        sizeCategory: "medium"
    },
    {
        id: 13,
        title: "Flourished Fantasy",
        description: "An elaborate display of flourishing techniques that transforms simple letters into works of art. Each flourish is carefully planned to enhance the overall composition.",
        image: "samples/13.jpeg",
        category: "decorative",
        size: "18 × 20",
        sizeCategory: "large"
    },
    {
        id: 14,
        title: "Heritage Script",
        description: "Traditional foundational hand that connects us to the rich history of calligraphy. This piece honors the masters who came before while adding a personal touch.",
        image: "samples/14.jpeg",
        category: "traditional",
        size: "13 × 17",
        sizeCategory: "medium"
    },
    {
        id: 15,
        title: "Artistic Expression",
        description: "A fusion of calligraphy and fine art that pushes creative boundaries. This experimental piece explores new possibilities in the ancient art of beautiful writing.",
        image: "samples/15.jpeg",
        category: "modern",
        size: "24 × 30",
        sizeCategory: "large"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxSize = document.getElementById('lightbox-size');
const lightboxCategory = document.getElementById('lightbox-category');
const closeLightbox = document.querySelector('.close-lightbox');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const contactForm = document.querySelector('.contact-form');

let currentImageIndex = 0;
let currentFilter = 'all';
let filteredData = portfolioData;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    renderGallery();
    setupEventListeners();
    animateOnScroll();
});

// Mobile Navigation
function setupEventListeners() {
    // Hamburger menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            filterGallery();
        });
    });

    // Lightbox controls
    closeLightbox.addEventListener('click', closeLightboxModal);
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Close lightbox when clicking outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxModal();
        }
    });

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightboxModal();
            if (e.key === 'ArrowLeft') showPreviousImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });

    // Contact form
    contactForm.addEventListener('submit', handleFormSubmit);

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Render Gallery
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    portfolioData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="gallery-image" loading="lazy">
            <div class="gallery-info">
                <h3 class="gallery-title">${item.title}</h3>
                <p class="gallery-description">${item.description}</p>
                <div class="gallery-details">
                    <span class="gallery-size">${item.size}"</span>
                    <span class="gallery-category">${item.category}</span>
                </div>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
}

// Filter Gallery
function filterGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (currentFilter === 'all') {
        filteredData = portfolioData;
    } else if (['small', 'medium', 'large'].includes(currentFilter)) {
        filteredData = portfolioData.filter(item => item.sizeCategory === currentFilter);
    } else {
        filteredData = portfolioData.filter(item => item.category === currentFilter);
    }
    
    galleryItems.forEach((item, index) => {
        const originalItem = portfolioData[index];
        const shouldShow = filteredData.includes(originalItem);
        
        if (shouldShow) {
            item.classList.remove('hidden');
            item.style.display = 'block';
        } else {
            item.classList.add('hidden');
            setTimeout(() => {
                if (item.classList.contains('hidden')) {
                    item.style.display = 'none';
                }
            }, 300);
        }
    });
    
    // Re-animate visible items
    setTimeout(() => {
        const visibleItems = document.querySelectorAll('.gallery-item:not(.hidden)');
        visibleItems.forEach((item, index) => {
            item.style.animation = 'none';
            item.offsetHeight; // Trigger reflow
            item.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
        });
    }, 350);
}

// Lightbox Functions
function openLightbox(index) {
    const currentData = getCurrentData();
    const actualIndex = portfolioData.findIndex(item => item.id === currentData[index].id);
    
    currentImageIndex = actualIndex;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightboxModal() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateLightboxContent() {
    const item = portfolioData[currentImageIndex];
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDescription.textContent = item.description;
    lightboxSize.textContent = `${item.size}"`;
    lightboxCategory.textContent = item.category;
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + portfolioData.length) % portfolioData.length;
    updateLightboxContent();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % portfolioData.length;
    updateLightboxContent();
}

function getCurrentData() {
    if (currentFilter === 'all') {
        return portfolioData;
    } else if (['small', 'medium', 'large'].includes(currentFilter)) {
        return portfolioData.filter(item => item.sizeCategory === currentFilter);
    } else {
        return portfolioData.filter(item => item.category === currentFilter);
    }
}

// Form Handling
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

// Scroll Animations
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animation
    const animateElements = document.querySelectorAll('.about-content, .skill-item, .contact-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Preload images for better performance
function preloadImages() {
    portfolioData.forEach(item => {
        const img = new Image();
        img.src = item.image;
    });
}

// Initialize image preloading
preloadImages();

// Add loading states and error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = 'Image not available';
        });
    });
});

// Add smooth reveal animation for gallery items
function addGalleryAnimations() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });
    
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        galleryObserver.observe(item);
    });
}

// Call gallery animations after render
setTimeout(addGalleryAnimations, 100);