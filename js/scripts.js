import { printElements } from "./modules/handle_elements.js";

import { addToLocalStorage, clearLocalStorage } from "./modules/handle_localstorage.js";

const formApp = document.getElementById('form-app');
const listOfLinks = document.getElementById('list-of-links');
const clearAll = document.getElementById('clear-all');

formApp.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
        name: formApp.title.value.trim(),
        link: formApp.link.value.trim()
    };

    if (data.name !== "" && data.link !== "") {
        addToLocalStorage(data);
        printElements(listOfLinks);
        formApp.reset();
    };
});

clearAll.addEventListener('click', () => {
    clearLocalStorage();
    printElements(listOfLinks);
});

document.addEventListener('DOMContentLoaded', () => {
    printElements(listOfLinks);
});