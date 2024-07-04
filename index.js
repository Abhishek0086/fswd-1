
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Form Validation
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let isValid = true;
    
        if (!name) {
            alert('Please enter your name.');
            isValid = false;
        }
    
        if (!email) {
            alert('Please enter your email.');
            isValid = false;
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }
    
        if (!message) {
            alert('Please enter your message.');
            isValid = false;
        }
    
        if (isValid) {
            alert('Form submitted successfully!');
            // Here you can add code to actually submit the form, like an AJAX request.
        }
    });
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
    