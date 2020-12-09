const Banner = (imgSrc) => {
  const div = document.createElement('div');
  const h6 = document.createElement('h6');
  const h3 = document.createElement('h3');
  const a = document.createElement('a');
  const img = document.createElement('img');
  const imgWrapper = div.cloneNode();

  div.className = 'col-6 banner';
  h6.className = 'banner__suptitle';
  h3.className = 'banner__title';
  a.className = 'banner__link';
	imgWrapper.className = 'banner__image'

  img.src = imgSrc;
  img.alt = 'Tomato foccacia';
  a.href = `#`;

  h6.innerText = `RECIPES`;
  h3.innerText = `Tomato foccacia`;
  a.innerHTML = `
	Read recepies
	<span>&rsaquo;</span>`;

  imgWrapper.append(img);
  div.append(h6);
  div.append(h3);
  div.append(a);
  div.append(imgWrapper);

  return div.outerHTML;
};

export default Banner;
