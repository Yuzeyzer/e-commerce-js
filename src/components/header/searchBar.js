const searchBar = () => {
  const div = document.createElement('div');

  div.className = 'header__search-bar search-bar';

  div.innerHTML = `
	<ul class="search-bar__list">
		<h3 class="search-bar__title">
			All categories
			<img src="./src/images/icon-arrow-down.svg" alt="icon-arrow-down"/>
		</h3>
		<li class="search-bar__item"><a class="search-bar__link" href="#">Random Text </a></li>
		<li class="search-bar__item"><a class="search-bar__link" href="#">Random Text </a></li>
		<li class="search-bar__item"><a class="search-bar__link" href="#">Random Text </a></li>
	</ul>
	<label>
		<input class="search-bar__input" type="text" placeholder="Search Products, categories ..."/>
	</label>
	<button class="search-bar__btn">
		<img src="./src/images/search.svg" alt="search"/>
	</button>
	`;

  return div.outerHTML;
};

export default searchBar();
