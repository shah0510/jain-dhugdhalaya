function toggleMenu() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Toggle the mobile menu when the hamburger is clicked
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

// Toggle the dropdown on click (and prevent the default anchor behavior)
function toggleDropdown(event) {
    event.preventDefault(); // Prevent page reload on clicking anchor
    const dropdown = event.target.nextElementSibling;
    dropdown.classList.toggle("active");
}