export default function renderAbout() {
	const section = document.createElement("section");
	section.classList.add("about-section");

	const about = document.createElement("div");
	about.classList.add("about-us");

	const aboutTitle = document.createElement("h2");
	aboutTitle.textContent = "About Us";

	const aboutDescription = document.createElement("p");
	aboutDescription.innerHTML = `
    Since 2004, Savoureux Café has been a cozy spot where good food and great company come together. 
    We serve handcrafted coffee, fresh-baked pastries, and hearty bites made with simple, honest ingredients.

    Whether you're starting your day with an espresso or winding down with a slice of pie, 
    our café is the perfect place to relax, catch up, or just enjoy a quiet moment.<br>

    <span>Come in, get comfortable — we'll take care of the rest.</span>
    `;

	about.appendChild(aboutTitle);
	about.appendChild(aboutDescription);

	section.appendChild(about);

	const location = document.createElement("div");
	location.classList.add("location");

	const locationTitle = document.createElement("h2");
	locationTitle.textContent = "Location";

	const iFrame = document.createElement("iframe");
	iFrame.src =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d413930.5752015354!2d1.9544423684386594!3d48.23066918164293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sen!2sin!4v1751271308434!5m2!1sen!2sin";

	iFrame.setAttribute("loading", "lazy");
	iFrame.setAttribute("allowfullscreen", "");
	iFrame.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

	location.appendChild(locationTitle);
	location.appendChild(iFrame);

	section.appendChild(location);

	return section;
}
