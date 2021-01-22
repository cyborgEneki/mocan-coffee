function displaySubMenu(event) {
	let targetElement = event.target,
		targetElementId = targetElement.id,
		matchingSubMenuElement = document.querySelectorAll(
			`[data-menu='${targetElementId}']`
		)[0];

	if (targetElementId === "about" || targetElementId === "process") {
		targetElement.classList.add("active-link");
	}

	matchingSubMenuElement.style.display = "block";
}

function hideSubMenu(event) {
	let targetElement = event.target,
		targetElementDataAttribute = targetElement.getAttribute("data-menu"),
		correspondingMenuItem = document.querySelector(
			`#${targetElementDataAttribute}`
		);
	correspondingMenuItem.classList.remove("active-link");

	targetElement.style.display = "none";
}
