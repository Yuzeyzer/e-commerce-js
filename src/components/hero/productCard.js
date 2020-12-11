const ProductCard = (item, className = 'col-4') => {
  const div = document.createElement('div');
  const divItem = div.cloneNode();
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const span = document.createElement('span');
  const a = document.createElement('a');
  const flexDiv = div.cloneNode();
  const spanDiscount = span.cloneNode();
  const spanOldPrice = span.cloneNode();

  div.className = `${className} product`;
  divItem.className = 'product__item';
  img.className = 'product__image';
  h3.className = 'product__title';
  p.className = 'product__description';
  a.className = 'product__btn';
  span.className = 'product__price';
  spanOldPrice.className = 'product__old-price';
  spanDiscount.className = 'product__discount';
  flexDiv.className = 'product__flex';

  img.src = item.img;
  img.alt = 'Tigranine pie with berries';
  a.href = '#';

  h3.innerHTML = item.title;
  p.innerHTML = item.description;
  span.innerHTML = `${item.price} USD`;
  a.innerHTML = `Buy now`;
  spanOldPrice.innerHTML = `48.56`;
  spanDiscount.innerHTML = `36%`;

  divItem.append(img);
  divItem.append(h3);
  divItem.append(p);
  divItem.append(flexDiv);
  divItem.append(spanDiscount);
  flexDiv.append(span);
  flexDiv.append(a);
  flexDiv.append(spanOldPrice);
  div.append(divItem);

  return div.outerHTML;
};

export default ProductCard;
