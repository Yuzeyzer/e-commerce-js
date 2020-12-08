const Logo = () => {
  const tagLogo = document.createElement('div');
  tagLogo.innerHTML = `
	<a href="index.html">
		<img src="./src/images/logo.png" />
	</a>
	`;
  return tagLogo.outerHTML;
};

export default Logo();
