import Header from './components/header/index.js';
import Home from './pages/home.js';
import Vega from './pages/vegetabes.js'
import Munarbek from './munarbek.js';

const root = () => {
  const rootDiv = document.createElement('div');

  rootDiv.setAttribute('id', 'root');

  rootDiv.append(Header());
  rootDiv.append(Home());

  document.body.append(rootDiv);

  const vegatables = document.querySelectorAll('.vegatables');
  const home = document.querySelector('.home');

  vegatables.forEach((item) => {
    item.addEventListener('click', () => {
      home.remove();
      rootDiv.append(Vega());
    });
  });

  Munarbek();
  return rootDiv;
};
root();
