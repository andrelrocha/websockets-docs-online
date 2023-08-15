import "./socketFrontIndex.js"
import { emitAddDocument } from "./socketFrontIndex.js"
import { getCookie, removeCookie } from "./utils/cookies.js";

const tokenJwt = getCookie('tokenJwt');

const documentsList = document.getElementById('documents-list');
const form = document.getElementById('form-add-document');
const inputDocument = document.getElementById('input-document');
const logout = document.getElementById('button-logout');

logout.addEventListener('click', () => {
    removeCookie("tokenJwt");
    alert("Você foi deslogado");
    window.location.href = '/login/index.html';
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emitAddDocument(inputDocument.value)
    inputDocument.value = '';
})

function insertLinkDocument(documentName) {
    documentsList.innerHTML += `
        <a 
            href="documento/index.html?nome=${documentName}" class="list-group-item list-group-item-action">
            ${documentName}
        </a>
    `;
}

export { insertLinkDocument }