const products = `
0. Normal (sin producto)
1. Mini Pan de Jamon
2. Queso Crema jamon
3. Queso Crema Salame
4. Queso Crema Champiñon
5. Cachito
6. Golfeado
`;

const article = {
	products: [
	 "Normal (sin producto)",
	 "Mini Pan de Jamon",
	 "Queso Crema jamon",
	 "Queso Crema Salame",
	 "Queso Crema Champiñon",
	 "Cachito",
	 "Golfeado"
	]
}


const defaultValue = 0
const stickerSelected = parseInt(prompt(`¿Qué quieres imprimir? ${products}`)) || defaultValue

console.log(stickerSelected)
const articles = document.getElementsByTagName("article");
const articlesArray = [...articles]


const main = document.getElementsByTagName("main")[0];


// Son 88 elementos a insertar
totalArticles = 88;

const ArticleTemplate = (stickerSelected) => (
 `<article class="item">
		<img 
			src="assets/img/transparente-logo.png" 
			class="item__logo"
		/>
		<p class="item__slogan">Un placer para tu paladar</p>
		<small class="item__product">
			${article.products[stickerSelected]}
		</small>
	<section class="item__social-network">
		<img 
			src="assets/img/instagram.png" 
			class="item__social-network__icon" 
		/>
		<p class="item__social-network__user">@donuts.paradise</p>
	</section>
</article>`
)
	

const createTemplate = (HTMLString) => {
		
	const $html = document.implementation.createHTMLDocument();
	$html.body.innerHTML = HTMLString;
	return $html.body.children[0];
}

for (let i = 0; i < totalArticles; i++) {

	const articleString = ArticleTemplate(stickerSelected);
	const $article = createTemplate(articleString)
	main.appendChild($article);
}

	if(stickerSelected === 0) {
		const productTitles = document.querySelectorAll("body > main > article > small")
		console.log(productTitles)
		const productTitlesArray = [...productTitles]
		productTitlesArray.map((title) => {
			title.style.visibility = "hidden";
		})
	}



