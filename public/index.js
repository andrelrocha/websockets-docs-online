import "./socketFrontIndex.js"
import { emitAddDocument } from "./socketFrontIndex.js"

const documentsList = document.getElementById('documents-list');
const form = document.getElementById('form-add-document');
const inputDocument = document.getElementById('input-document');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emitAddDocument(inputDocument.value)
    inputDocument.value = '';
})

function insertLinkDocument(documentName) {
    documentsList.innerHTML += `
        <a 
            href="documento.html?nome=${documentName}" class="list-group-item list-group-item-action">
            ${documentName}
        </a>
    `;
}

export { insertLinkDocument }