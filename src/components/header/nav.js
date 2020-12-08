const Nav = () => {
  const tagNav = document.createElement('nav');
  tagNav.className = 'header__nav nav';
  tagNav.innerHTML = `
	<ul class="nav__list">
		<li class="nav__item"><a class="nav__link" href="#">Blog</a></li>
		<li class="nav__item"><a class="nav__link" href="#">About Us</a></li>
		<li class="nav__item"><a class="nav__link" href="#">Careers</a></li>
	</ul>
	`;
  return tagNav.outerHTML;
};

export default Nav();
