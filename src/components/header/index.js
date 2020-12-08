import Contact from './contact.js';
import Nav from './nav.js';
import Logo from './logo.js';
import SearchBar from './searchBar.js';
import System from './system.js';
import DropDowns from './dropdowns.js';

const Header = () => {
  const tagHeader = document.createElement('header');
  tagHeader.innerHTML = `
		<div class="container">
			<div class="header__top">
				${Contact}
				${Nav}
			</div>
      <div class="header__middle">
        ${Logo}
        ${SearchBar}
        ${System}
			</div>
    </div>
    <div class="header__bottom">
      <div class="container">
        ${DropDowns}
       </div>
    </div>
  `;

  document.body.append(tagHeader);

  const headerMiddle = () => {
    const ul = document.querySelector('.search-bar__list');
    const h3 = document.querySelector('.search-bar__title');
    const button = document.querySelector('.search-bar__btn');

    button.addEventListener('click', () => {
      button.classList.toggle('is-active');
    });

    h3.addEventListener('click', () => {
      ul.classList.toggle('is-active');
      h3.classList.toggle('is-active');
    });
  };
  const headerBottom = () => {
    const ul = document.querySelectorAll('.dropdown__list');
    const h3 = document.querySelectorAll('.dropdown__title');

    h3.forEach((item, index) => {
      item.addEventListener('click', (event) => {
        event.target.classList.toggle('is-active');
        ul.forEach((e, i) => {
          if (i != index) e.classList.remove('is-active');
        });
        ul[index].classList.toggle('is-active');
      });
    });
  };
  headerMiddle();
  headerBottom();
  return tagHeader;
};
export default Header;
