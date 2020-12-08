const Contact = () => {
  const contactList = document.createElement('ul');
  contactList.className = 'header__contact contact';
  contactList.innerHTML = `
	<li class="contact__item"><a class="contact__link" href="#">Chat with us</a></li>
	<li class="contact__item"><a class="contact__link" href="#">+420 336 775 664</a></li>
	<li class="contact__item"><a class="contact__link" href="#">info@freshnesecom.com</a></li>
	`;
  return contactList.outerHTML;
};
export default Contact();
