document.addEventListener('DOMContentLoaded', function() {

  var addMenu = document.getElementById('menu-icon');
  var closeMenu = document.getElementById('close-menu');
  var menu = document.getElementById('menu-wrapper');

  addMenu.addEventListener('click', function() {
      menu.classList.add('show');
  });

  closeMenu.addEventListener('click', function() {
    menu.classList.remove('show');
  });

});
document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
  });

  document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById('menu-icon');
    var navbarLeft = document.querySelector('.navbar-left');

    menuIcon.addEventListener('click', function() {
        navbarLeft.style.display = navbarLeft.style.display === 'block' ? 'none' : 'block';
    });
});
