const Reviews = (item) => {
  const section = document.createElement('section');
  const column = document.createElement('div');
  const div = document.createElement('div');
  const p = document.createElement('p');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const img = document.createElement('img');

  section.className = 'reviews swiper-container';
  h2.className = 'reviews__title';
  h3.className = 'reviews__author';
  img.className = 'reviews__image';
  p.className = 'reviews__description';
  div.className = 'reviews__item';
  column.className = 'col-4 swiper-slide';

  console.log(item);

  img.src = item[0].img;

  img.alt = 'avatar';

  p.innerHTML = `“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “`;
  h3.innerHTML = `Name and Surname`;

  div.append(p);
  div.append(h3);
  div.append(img);
  column.append(div);

  section.innerHTML = `
		<div class="swiper-container">
			<div class="swiper-wrapper">
				${column.outerHTML}
				${column.outerHTML}
				${column.outerHTML}
				${column.outerHTML}
				${column.outerHTML}
				${column.outerHTML}
				${column.outerHTML}
				${column.outerHTML}
			</div>
		</div>
	`;
  return section.outerHTML;
};

export default Reviews;
