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

	if (name === "home") {
		const $menuBtn = document.querySelector(".menu-btn");
		if ($menuBtn) {
			$menuBtn.addEventListener("click", () => {
				setActiveTab("menu");
				switchSection("menu");
			});
		}
	}
}

function setActiveTab(tabName) {
	document.querySelectorAll(".nav-btn").forEach((button) => {
		button.classList.remove("active");
	});

	const activeBtn = document.getElementById(tabName);
	activeBtn.classList.add("active");
}

const main = document.createElement("main");
$content.appendChild(main);

const $navButtons = document.querySelectorAll(".nav-btn");

$navButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const btnId = button.id;
		setActiveTab(btnId);
		switchSection(btnId);
	});
});

// Initial Render

setActiveTab("home");
switchSection("home");
