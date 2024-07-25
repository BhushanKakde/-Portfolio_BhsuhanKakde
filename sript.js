var typed = new Typed(".text", {
    strings: ["Python developer", "backend developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
})


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const formData = new FormData(this); // Get form data

//     fetch('http://localhost:3000/submit', {
//         method: 'POST',
//         body: formData,
//     })
//     .then(response => response.text())
//     .then(result => {
//             // Display the result message in the responseMessage div
//         document.getElementById('responseMessage').innerText = result;
//             // Optionally, clear the form fields
//         document.getElementById('contactForm').reset();
//     })
//     .catch(error => {
//             // Handle errors here
//          document.getElementById('responseMessage').innerText = 'Error submitting form. Please try again.';
//     });
// });




