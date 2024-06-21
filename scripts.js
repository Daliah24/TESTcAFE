document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('toggle-menu');
  var menuIcon = document.getElementById('menu-icon');

  toggleButton.addEventListener('click', function() {
    // Check if the menu icon is currently displayed
    if (menuIcon.style.display === 'none' || menuIcon.style.display === '') {
      menuIcon.style.display = 'block'; // Show the menu icon
    } else {
      menuIcon.style.display = 'none'; // Hide the menu icon
    }
  });
});

