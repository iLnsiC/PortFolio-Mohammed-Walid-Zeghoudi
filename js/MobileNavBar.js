var navbar;
const mobileNavBar = document.createElement('div');
const webNavBar = document.createElement('ul');


webNavBar.innerHTML = `<li><a href="index.html">Accueil</a></li>
<li><a href="index.html#about">A propos</a></li>
<li><a href="work.html">Travaux</a></li>`

mobileNavBar.classList.add('menuW');
mobileNavBar.innerHTML = `<input type="checkbox" class="toggler">
<div class="hamb">
  <div></div>
</div>
<div class="menu">
  <div>
    <div>
      <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="index.html#about">A propos</a></li>
      <li><a href="work.html">Travaux</a></li>
      </ul>
    </div>
  </div>
</div>`
// navbar.parentNode.replaceChild(mobileNavBar, navbar);

function NavBar(x) {
  if (x.matches) { // If media query matches
    navbar = document.querySelector('#main-nav :nth-child(2)');
    navbar.parentNode.replaceChild(mobileNavBar, navbar);
  }else{
    navbar = document.querySelector('#main-nav :nth-child(2)');
    navbar.parentNode.replaceChild(webNavBar, navbar);
  }
}

var x = window.matchMedia("(max-width: 700px)")
NavBar(x) // Call listener function at run time
x.addListener(NavBar) // Attach listener function on state changes
