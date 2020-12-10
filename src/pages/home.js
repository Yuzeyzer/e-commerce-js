import Hero from '../components/hero/index.js';
import Reviews from '../components/reviews/index.js';
import { reviewsData } from '../components/reviews/const.js';

const Home = () => {
  const homePage = document.createElement('main');

  homePage.innerHTML = `
  ${Hero}
  ${Reviews(reviewsData.map((item) => item))}
	`;

  return homePage;
};

export default Home;
