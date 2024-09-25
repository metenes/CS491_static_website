// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        alert(`Thank you, ${name}! We will contact you at ${email} soon.`);
    } else {
        alert('Please fill out all fields.');
    }
});
