import Sidebar from '../sidebar/index.js';
import { titleOfSidebar, listItemsOfSidebar, btnTextOfSidebar } from './const.js';

const Hero = () => {
  const heroSection = document.createElement('section');

  heroSection.className = 'hero';

  heroSection.innerHTML = `
	<div class="container">
		<div class="row hero__row">
			${Sidebar(titleOfSidebar, listItemsOfSidebar, btnTextOfSidebar)}
			<div class="hero__content col-9">Я есть правый контент от сайдбара</div>
		</div>
	</div>
	`;

  return heroSection.outerHTML;
};

export default Hero();
