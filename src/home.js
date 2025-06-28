export default function renderHome() {
	const section = document.createElement("section");
	section.innerHTML = `
    <h1>Savoureux Café</h1>
	<p>Love in every bite, satisfaction in every visit.</p>
	<button class="menu-btn">Menu</button>
    `;
	return section;
}
