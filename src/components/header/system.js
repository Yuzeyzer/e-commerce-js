const System = () => {
  const div = document.createElement('div');
	const ul = document.createElement('ul');
	
	ul.className = 'system__list';
	
  ul.innerHTML = `
	<li class="system__item">
		<a href="">
			<img src="./src/images/user-icon.svg" alt="user-icon" />
		</a>
	</li>
	<li class="system__item">
		<a href="">
			<img src="./src/images/cart-icon.svg" alt="cart-icon" />
			<span class="system__count">4</span>
		</a>
	</li>
	`;

  div.append(ul);

  return div.outerHTML;
};

export default System();
