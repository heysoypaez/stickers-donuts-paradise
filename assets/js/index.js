const products = `
1. Mini Pan de Jamon
2. Queso Crema jamon
3. Queso Crema Salame
4. Queso Crema Champiñon
5. Cachito
6. Golfeado
7. Normal (sin producto)
`;

const defaultValue = 7
const value = prompt(`¿Qué quieres imprimir? ${products}`) || defaultValue
const articles = document.getElementsByTagName("article");
const articlesArray = [...articles]

articlesArray.map((article) => {
	article.style.backgroundImage = `url("./assets/img/${value}.png")`;
})
