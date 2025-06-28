import "./styles.css";
import renderHome from "./home";

const $content = document.querySelector("#content");

const sections = {
	home: renderHome,
};

function switchSection(name) {
	main.innerHTML = "";
	main.appendChild(sections[name]());
}

const main = document.createElement("main");
$content.appendChild(main);

// Initial Render

switchSection("home");
