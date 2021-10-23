const ls = localStorage;

const toString = (item) => JSON.stringify(item);
const toObject = (item) => JSON.parse(item);

const addItem = (item) => {
    let items = toObject(ls.getItem("items")) || [];
    items = [...items, item];
    ls.setItem("items", toString(items));
}

const getItems = () => {
    const items = toObject(ls.getItem("items")) || [];
    return items;
}

export { addItem, getItems };