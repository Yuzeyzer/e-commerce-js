const Reviews = (item) => {
  const section = document.createElement('section');
  const h2 = document.createElement('h2');

  section.className = 'reviews swiper-container';

  console.log(item);

  h2.innerHTML = 'Our customers says';
  h2.className = 'reviews__title';

  section.innerHTML = `
    ${h2.outerHTML}
		<div class="swiper-container">
			<div class="swiper-wrapper">
        ${item
          .map((element) => {
            const column = document.createElement('div');
            const div = document.createElement('div');
            const p = document.createElement('p');
            const h3 = document.createElement('h3');
            const img = document.createElement('img');

            p.innerHTML = `“${element.description}“`;
            h3.innerHTML = `${element.author}`;

            img.className = 'reviews__image';
            h3.className = 'reviews__author';
            p.className = 'reviews__description';
            div.className = 'reviews__item';
            column.className = 'col-4 swiper-slide';

            img.src = element.img;

            img.alt = 'avatar';

            div.append(p);
            div.append(h3);
            div.append(img);
            column.append(div);
            return column.outerHTML;
          })
          .join('')}
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
		</div>
	`;
  return section.outerHTML;
};

export default Reviews;
