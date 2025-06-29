import "./styles.css";
import renderHome from "./home";
import renderMenu from "./menu";

const $content = document.querySelector("#content");

const sections = {
	home: renderHome,
	menu: renderMenu,
};

function switchSection(name) {
	main.innerHTML = "";
	main.appendChild(sections[name]());
}

const main = document.createElement("main");
$content.appendChild(main);

const $navButtons = document.querySelectorAll(".nav-btn");

$navButtons.forEach((button) => {
	button.addEventListener("click", () => {
		$navButtons.forEach((btn) => btn.classList.remove("active"));

		button.classList.add("active");
		switchSection(button.id);
	});
});

// Initial Render

switchSection("home");
