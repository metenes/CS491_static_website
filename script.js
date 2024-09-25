// script.js
document.getElementById('learn-more').addEventListener('click', () => {
    alert('Thanks for your interest! More details will be available soon.');
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thanks, ${name}! We will contact you shortly at ${email}.`);
    }
});
