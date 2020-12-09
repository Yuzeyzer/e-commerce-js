import Header from './components/header/index.js';
import Home from './pages/home.js';

const root = () => {
  const rootDiv = document.createElement('div');

  rootDiv.setAttribute('id', 'root');

  rootDiv.append(Header());
  rootDiv.append(Home());

  document.body.append(rootDiv);

  const p = document.querySelectorAll('.product__description');
  p.forEach((item, index) => {
    const arrayOfLetters = item.textContent.split('');
    if (arrayOfLetters.length > 50) {
      p[index].style.height = '35px';
      p[index].style.overflow = 'hidden';
      item.textContent = `${item.textContent}...`
    }
  });
  return rootDiv;
};
root();
