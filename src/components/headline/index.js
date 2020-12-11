import ProductCard from '../hero/productCard.js';
import { products } from '../hero/const.js';

const Headline = () => {
  const headlineSection = document.createElement('section');

  headlineSection.className = 'headline';

  headlineSection.innerHTML = `
	<div class="container">
		<div class="row headline__row">
			<div class="headline__content row col-12 product__row">
				${products.map((item) => ProductCard(item, 'col-3')).join('')}
			</div>
		</div>
	</div>
	`;

  return headlineSection.outerHTML;
};

export default Headline;
