import { getItems } from "./handle_localstorage.js";

const createElement = (link, text) => {
    return `<li class="saved-content__item">
            <a class="saved-content__link" target="_blank" href="${link}">${text}</a>
        </li>`;
};

const createElements = () => {
    const items = getItems();

    if (items.length === 0) return createElement("#", "No saved links");

    const elements = items.map(item => createElement(item.link, item.name));
    return elements.join("");
}

export { createElement, createElements };