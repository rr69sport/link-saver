import { createElements } from "./modules/handle_elements.js";

import { addItem } from "./modules/handle_localstorage.js";

const formApp = document.getElementById('form-app');
const savedContent = document.getElementById('saved-content');

formApp.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        name: formApp.title.value.trim(),
        link: formApp.link.value.trim()
    }
    if (data.name !== "" && data.link !== "") {
        addItem(data);
        savedContent.textContent = "";
        savedContent.innerHTML = createElements();
        formApp.reset();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    savedContent.textContent = "";
    savedContent.innerHTML = createElements();
});