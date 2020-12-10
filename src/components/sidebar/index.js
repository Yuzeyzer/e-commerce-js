const Sidebar = (title, listItems, buttonText, className = 'col-3') => {
  const aside = document.createElement('aside');

  aside.className = `hero__sidebar sidebar ${className}`;

  aside.innerHTML = `
		<h3 class="sidebar__title">${title}</h3>
		<ul class="sidebar__list">
			${listItems
        .map((item) => {
          const li = document.createElement('li');
          const a = document.createElement('a');

          li.className = 'sidebar__item';
          a.className = 'sidebar__link';

					a.innerHTML = item;
					
					a.setAttribute('href', '#')

          li.append(a);

          return li.outerHTML;
        })
        .join('')}
		</ul>
		<a class="sidebar__btn" href="#">
			${buttonText} 
			<span>&rsaquo;</span>
		</a>
	`;
  return aside.outerHTML;
};

export default Sidebar;
