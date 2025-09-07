// main.js - Core JavaScript functionality with EmailJS integration

// Add this check at the very beginning to prevent server-side execution
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        const navbar = document.getElementById('navbar');
        const navLinks = document.querySelectorAll('.nav-links a');
        const menuToggle = document.getElementById('menuToggle');
        const navLinksContainer = document.querySelector('.nav-links');
        const sections = document.querySelectorAll('.section');

        // 🔹 Search elements
        const searchBtn = document.getElementById('searchBtn');
        const searchBox = document.getElementById('searchBox');
        const searchClose = document.getElementById('searchClose');

        // Initialize EmailJS - Replace with your actual public key
        emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Get this from emailjs.com

        // Navbar scroll effect
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');

            updateActiveNavLink();
            animateSkillBars();
            animateTimeline();
            animateProjectCards();
        });

        // Mobile menu toggle
        if (menuToggle && navLinksContainer) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active');
                navLinksContainer.classList.toggle('active');
            });
        }

        // Close mobile menu on link click (mobile only)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    menuToggle.classList.remove('active');
                    navLinksContainer.classList.remove('active');
                }
            });
        });

        // Smooth scrolling
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // navbar height
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            });
        });

        // Active nav link highlight
        function updateActiveNavLink() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.clientHeight) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) link.classList.add('active');
            });
        }

        // Skill bar animation
        function animateSkillBars() {
            document.querySelectorAll('.skill-progress').forEach(bar => {
                const width = bar.getAttribute('data-width');
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) bar.style.width = width + '%';
            });
        }

        // Timeline animation
        function animateTimeline() {
            document.querySelectorAll('.timeline-item').forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setTimeout(() => item.classList.add('animate'), index * 200);
                }
            });
        }

        // Project cards animation
        function animateProjectCards() {
            document.querySelectorAll('.project-card').forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setTimeout(() => card.classList.add('animate'), index * 150);
                }
            });
        }

        // 🔹 Contact form with EmailJS integration
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();
                
                // Check if EmailJS is available
                if (typeof emailjs === 'undefined') {
                    console.error('EmailJS is not loaded. Please check that you have included the EmailJS script in your HTML.');
                    alert("Sorry, the contact form is not configured properly. Please try again later.");
                    return;
                }
                
                // Get form data for validation
                const formData = new FormData(contactForm);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                
                // Basic validation
                if (!name || !email || !subject || !message) {
                    alert("Please fill in all fields.");
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }
                
                // Get the submit button
                const submitBtn = contactForm.querySelector('button[type="submit"]') || 
                                 contactForm.querySelector('input[type="submit"]') ||
                                 contactForm.querySelector('button');
                
                let originalText = '';
                if (submitBtn) {
                    originalText = submitBtn.textContent || submitBtn.value;
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;
                }
                
                // Your EmailJS configuration - REPLACE THESE WITH ACTUAL VALUES
                const serviceId = 'service_mn66l6d';     // e.g., 'service_abc123'
                const templateId = 'template_p4auzhn';   // e.g., 'template_xyz456'
                const publicKey = 'QC0tm7J1LheIuk7J3'; // e.g., 'user_abcdef123456'
                
                // Check if the required EmailJS parameters are properly configured
                if (!serviceId || !templateId || !publicKey) {
                    console.error('EmailJS configuration missing');
                    alert("Contact form is not configured properly. Please contact the site administrator.");
                    if (submitBtn) {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }
                    return;
                }
                
                // Prepare template parameters (matching your EmailJS template variables)
                const templateParams = {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message,
                    to_name: 'Manan Maheshwari', // Your name
                    reply_to: email
                };
                
                console.log('Sending email with params:', templateParams);
                
                // Send email using EmailJS with explicit parameters
                emailjs.send(serviceId, templateId, templateParams, publicKey)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        alert("Thank you for your message! I'll get back to you soon.");
                        contactForm.reset();
                    })
                    .catch(function(error) {
                        console.error('EmailJS Error Details:', error);
                        
                        // More specific error messages
                        let errorMessage = "Sorry, there was an error sending your message. ";
                        
                        if (error.status === 400) {
                            errorMessage += "Please check your EmailJS configuration (Service ID, Template ID, or Public Key may be incorrect).";
                        } else if (error.status === 401) {
                            errorMessage += "Authentication failed. Please check your EmailJS Public Key.";
                        } else if (error.status === 404) {
                            errorMessage += "Service or template not found. Please check your Service ID and Template ID.";
                        } else {
                            errorMessage += "Please try again later.";
                        }
                        
                        alert(errorMessage);
                    })
                    .finally(function() {
                        // Reset button state
                        if (submitBtn) {
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;
                        }
                    });
            });
        }

        // 🔹 Search functionality
        if (searchBtn && searchBox) {
            searchBtn.addEventListener('click', e => {
                e.stopPropagation();
                searchBox.classList.toggle('active');
                const input = document.getElementById('searchInput');
                if (searchBox.classList.contains('active') && input) input.focus();
            });
            if (searchClose) {
                searchClose.addEventListener('click', () => searchBox.classList.remove('active'));
            }
            document.addEventListener('click', e => {
                if (searchBox.classList.contains('active') && !searchBox.contains(e.target) && e.target !== searchBtn) {
                    searchBox.classList.remove('active');
                }
            });
        }

        // 🔹 Experience Tabs Functionality (Single content container)
        const experienceTabs = document.querySelectorAll('.experience-tabs div');
        const experienceContent = document.querySelector('.experience-content');

        const experienceData = [
            {
                title: "Designer @ MRC",
                duration: "Sep 2025 - Present",
                items: [
                    "Developed a consistent visual identity for the club's flagship events that highlighted Rajasthan's culture..",
                    "Collaborated with organizers to ensure that designs aligned with event themes, enhancing overall participation and engagement.",
                    "Censured that the designs reflected both cultural authenticity and youthful creativity, making the events visually memorable."
                ]
            },
            {
                title: "Designer @ FYI",
                duration: "Nov 2024 - Sep 2025",
                items: [
                    "Designed posters, banners, and digital media for college events.",
                    "Collaborated with the core team to create visually engaging designs.",
                    "Contributed to branding, event identity, and creative direction."
                ]
            },
            {
                title: "NA",
                duration: "NA",
                items: [
                    "--Surely COMEBACK will be HARDER--",
                    "Peace out!",
                    "---"
                ]
            }
        ];

        function updateExperienceContent(index) {
            const data = experienceData[index];
            experienceContent.innerHTML = `
                <h3>${data.title}</h3>
                <p class="duration">${data.duration}</p>
                <ul>
                    ${data.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
        }

        experienceTabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                experienceTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                updateExperienceContent(index);
            });
        });

        // Initialize first tab
        if (experienceTabs[0]) {
            experienceTabs[0].classList.add('active');
            updateExperienceContent(0);
        }

        // Initialize
        updateActiveNavLink();
        document.body.classList.add('loaded');
    });
}