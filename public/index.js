import "./socketFrontIndex.js"

const documentsList = document.getElementById('documents-list');

function insertLinkDocument(documentName) {
    documentsList.innerHTML += `
        <a 
            href="documento.html?nome=${documentName}" class="list-group-item list-group-item-action">
            ${documentName}
        </a>
    `;
}

export { insertLinkDocument }