// Handle sidebar toggle
const toggleButton = document.getElementById('toggle-menu');
const sideMenu = document.getElementById('side-menu');
const closeButton = document.getElementById('close-menu');

// Toggle sidebar open/close
toggleButton.addEventListener('click', () => {
    if (sideMenu.style.left === '-300px') {
        sideMenu.style.left = '0'; // Show sidebar
    } else {
        sideMenu.style.left = '-300px'; // Hide sidebar
    }
});

// Close sidebar when '×' is clicked
closeButton.addEventListener('click', () => {
    sideMenu.style.left = '-300px'; // Hide sidebar
});

// Handle sidebar toggle (same as homepage)
document.getElementById('toggle-menu').addEventListener('click', function() {
    const menu = document.getElementById('side-menu');
    menu.style.left = (menu.style.left === '0px') ? '-100%' : '0';
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('side-menu').style.left = '-100%';
});

// Toggle between login and signup forms
document.getElementById('show-signup').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.querySelector('.signup-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});
