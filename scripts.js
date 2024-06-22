document.addEventListener('DOMContentLoaded', (event) => {
  const menuToggle = document.getElementById('menu-icon');
  const nav = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
  });
});


//Second Rate Shaboingery
function areYouSure(){
  let i = 'Are You Sure?'
  if (confirm(i)){
    window.open('https://www.youtube.com/watch?v=QwLvrnlfdNo', '_blank').focus();
  }
  else{
    alert('Okay! :D');
  }
}
