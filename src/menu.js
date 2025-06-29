import coffeeImg from "./assets/coffee.jpg";
import croissantImg from "./assets/croissant.jpg";
import frenchMacaronsImg from "./assets/french-macarons.jpg";
import latteImg from "./assets/latte.jpg";
import pieImg from "./assets/pie.jpg";
import pizzaImg from "./assets/pizza.jpg";
import sandwichImg from "./assets/sandwich.jpg";

export default function renderMenu() {
	const section = document.createElement("section");
	section.classList.add("menu-section");

	const heading = document.createElement("h2");
	heading.textContent = "Our Menu";
	section.appendChild(heading);

	const menuGrid = document.createElement("div");
	menuGrid.classList.add("menu-grid");

	const menuItems = [
		{
			name: "Coffee",
			img: coffeeImg,
			price: "$2",
		},
		{
			name: "Croissant",
			img: croissantImg,
			price: "$5",
		},
		{
			name: "French Macarons",
			img: frenchMacaronsImg,
			price: "$5",
		},
		{
			name: "Latte",
			img: latteImg,
			price: "$3",
		},
		{
			name: "Apple Pie",
			img: pieImg,
			price: "$6",
		},
		{
			name: "Chicken Pizza",
			img: pizzaImg,
			price: "$6",
		},
		{
			name: "Sandwich",
			img: sandwichImg,
			price: "$6",
		},
	];

	menuItems.forEach((item) => {
		const menuCard = createMenuCard(item);
		menuGrid.appendChild(menuCard);
	});

	section.appendChild(menuGrid);
	return section;
}

function createMenuCard({ name, price, img }) {
	const card = document.createElement("div");
	card.classList.add("menu-card");

	const image = document.createElement("img");
	image.src = img;
	image.alt = `${name} Image`;
	image.classList.add("menu-img");
	image.loading = "lazy";

	const title = document.createElement("h3");
	title.textContent = name;
	title.classList.add("menu-title");

	const Itemprice = document.createElement("p");
	Itemprice.textContent = price;
	Itemprice.classList.add("menu-price");

	card.appendChild(image);
	card.appendChild(title);
	card.appendChild(Itemprice);

	return card;
}
