function getHtmlElement (selector) {
    return document.querySelector(selector);
}

export function updateText (selector, text) {
    getHtmlElement(selector).textContent = text;
}

export function updateAttribute(selector, attribute, value) {
    getHtmlElement(selector).setAttribute(attribute, value);
}

export function updateHobbies (selector, hobbies) {
    const ul = getHtmlElement(selector);

    hobbies.forEach(hobby => {
        const li = document.createElement("li");
        li.textContent = hobby;
        ul.appendChild(li);
    });
}

export function updateTimeList (selector, list) {
    const element = getHtmlElement(selector);

    // parentElement permet de retirer l'article vide du HTML
    // et d'ajouter les articles copiés au bon endroit
    const parent = element.parentElement;
    parent.removeChild(element);

    // On retire l'ID pour ne pas le copier dans les autres éléments
    element.removeAttribute("id");

    list.forEach(item => {
        const article = element.cloneNode(true); // "true" pour copier les enfants du noeud HTML

        article.querySelector("time").textContent = item.get("date");
        article.querySelector("header").textContent = item.get("title");
        article.querySelector("footer").textContent = item.get("location");
        parent.appendChild(article);
    });
}