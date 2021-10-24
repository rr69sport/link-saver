import { getLocalStorageItems } from "./handle_localstorage.js";

const createElement = (id, name, link) => {
    return `<li class="list-of-links__wrapper">
            <a class="list-of-links__link" href="${link}">${name}</a>
            <span data-id="${id}" class="button delete-js list-of-links__delete">Delete</span>
        </li>`;
};

const createElements = () => {
    const items = getLocalStorageItems();

    if (items.length === 0) return createElement("", "No saved links", "#");

    const elements = items.map(item => createElement(item.id, item.name, item.link));
    return elements.join("");
}

const printElements = (element) => {
    if (element) {
        element.textContent = "";
        element.innerHTML = createElements();
    }
}

export { createElement, createElements, printElements };