function toggleMenu() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Toggle the mobile menu when the hamburger is clicked
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}

// Toggle the dropdown on click (and prevent the default anchor behavior)
function toggleDropdown(event) {
    event.preventDefault(); // Prevent page reload on clicking anchor
    const dropdown = event.target.nextElementSibling;
    dropdown.classList.toggle("show");
}

document.querySelector('.dropdown a').addEventListener('touchstart', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    toggleDropdown(); // Call toggle function on touch
});

// Close dropdown if clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown a')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');
            }
        }
    }
};

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active'); // Toggle the active class
    document.body.classList.toggle('no-scroll'); // Prevent body scroll
}


