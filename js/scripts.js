import { nanoid as generateId } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";

import { printElements } from "./modules/handle_elements.js";
import { urlRegex } from "./utils/urlRegex.js";

import { addToLocalStorage, removeFromLocalStorage, clearLocalStorage } from "./modules/handle_localstorage.js";

const formApp = document.getElementById("form-app");
const listOfLinks = document.getElementById("list-of-links");
const clearAll = document.getElementById("clear-all");
const errorSection = document.getElementById("error-section");
const inputLink = document.getElementById("link-to-save");

formApp.addEventListener("submit", (e) => {
	e.preventDefault();

	const data = {
		id: generateId(),
		text: formApp.title.value.trim(),
		link: formApp.link.value.trim(),
	};

	if (data.text !== "" && data.link.match(urlRegex)) {
		addToLocalStorage(data);
		printElements(listOfLinks);
		formApp.reset();
	} else {
		errorSection.style.display = "inline-block";
		inputLink.disabled = true;

		setTimeout(() => {
			errorSection.style.display = "none";
			inputLink.disabled = false;
		}, 1900);
	}
});

clearAll.addEventListener("click", () => {
	clearLocalStorage();
	printElements(listOfLinks);
});

listOfLinks.addEventListener("click", (e) => {
	if (e.target.classList.contains("delete-js")) {
		const id = e.target.dataset.id;
		removeFromLocalStorage(id);
		printElements(listOfLinks);
	}
});

document.addEventListener("DOMContentLoaded", () => {
	printElements(listOfLinks);
});
