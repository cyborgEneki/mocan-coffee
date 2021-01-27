function displaySubMenu(event) {
	let targetElement = event.target,
		targetElementId = targetElement.id,
		matchingSubMenuElement = document.querySelectorAll(
			`[data-menu='${targetElementId}']`
		)[0],
		allSubMenus = document.querySelectorAll("[data-menu]");;

	allSubMenus.forEach(item => item.style.display = "none")

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
		console.log(correspondingMenuItem);
	correspondingMenuItem.classList.remove("active-link");

	targetElement.style.display = "none";
}

function displayCarouselImageButton(event) {
	let targetElement = event.target;
	targetElement.querySelector(".carousel-image-button").style.visibility = 'visible';
}

function hideCarouselImageButton(event) {
	let targetElement = event.target;
	targetElement.querySelector(".carousel-image-button").style.visibility = "hidden";
}