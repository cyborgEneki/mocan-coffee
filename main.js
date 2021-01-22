function displaySubMenu(event) {
	let targetElement = event.target,
		targetElementId = targetElement.id,
		matchingSubMenuElement = document.querySelectorAll(
			`[data-menu='${targetElementId}']`
		)[0];

	targetElement.classList.add("active-link");

	if (matchingSubMenuElement) {
		matchingSubMenuElement.style.display = "block";
	}
}

function addActiveClass(event) {
	let targetElement = event.target;

	targetElement.classList.add("active-link");
}

// function removeActiveClass(event) {
// 	let targetElement = event.target;

// 	targetElement.classList.remove("active-link");
// }

// function hideSubMenu(event) {
// 	let targetElement = event.target,
// 		targetElementId = targetElement.id,
// 		matchingSubMenuElement = document.querySelectorAll(
// 			`[data-menu='${targetElementId}']`
//         )[0];

// 	if (!matchingSubMenuElement) {
// 		targetElement.classList.remove("active-link");
// 	}
// }
