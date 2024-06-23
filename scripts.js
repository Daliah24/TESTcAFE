document.addEventListener('DOMContentLoaded', (event) => {
  const menuToggle = document.getElementById('menu-icon');
  const nav = document.querySelector('.navbar');
  const menuItems = document.querySelectorAll('.navbar .menu-item'); // Ensure this correctly selects your menu items

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Add click event listener to each menu item
  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent event from propagating
      // Close the navbar menu when a menu item is clicked
      nav.classList.remove('open');
    });
  });
});

//Second Rate Shaboingery
function areYouSure(url){
  let i = 'Are You Sure?'
  if (confirm(i)){
    window.open(url, '_blank').focus();
  }
  else{
    alert('Okay! :D');
  }
}
