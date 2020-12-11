import Hero from '../components/hero/index.js';
import Reviews from '../components/reviews/index.js';
import Headline from '../components/headline/index.js';
import Blog from '../components/blog/index.js';
import { reviewsData } from '../components/reviews/const.js';

const Vega = () => {
  const Vega = document.createElement('main');

  Vega.innerHTML = `
  	${Blog()}
	`;

  return Vega;
};

export default Vega;
