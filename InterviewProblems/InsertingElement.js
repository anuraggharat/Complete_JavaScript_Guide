function addChild() {
    const list = document.getElementById('list');
    for (let index = 0; index < 10; index++) {
        let text = `Element number ${index + 1}`;
        let listItem = document.createElement('li');
        listItem.textContent = text;
        list.appendChild(listItem);
    }
}
addChild();
