import { saveToStorage, getFromStorage } from "./utils/storage.js"
import { listKey } from "./settings.js";

let listItems = getFromStorage(listKey);
createList(listItems);


// adding items to list

const listInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addItem);

function addItem() {
    const itemValue = listInput.value.trim();

    if(itemValue.length >= 1) {
        const newItem = { id: Date.now(), item: itemValue };
        listInput.value = "";
        listInput.focus();
        listItems.push(newItem);

        createList(listItems);
        saveToStorage(listKey, listItems);
    }
}


// creating list

function createList(listItems) {
    const listContainer = document.querySelector("ul");

    listContainer.innerHTML = "";

    if (listItems.length === 0) {
        listContainer.innerHTML = `<p class="message">There are no items in the list.</p>`;
    }  

    listItems.forEach(function(listItem) {
        listContainer.innerHTML += `<li><span>${listItem.item}</span><i class="fa fa-trash" data-id="${listItem.id}"></i></li>`;
    });

    const trashCans = document.querySelectorAll("li i");

    trashCans.forEach(function (can) {
        can.addEventListener("click", removeFromList);
    }); 
}


// removing items from list

function removeFromList() {

    const id = event.target.dataset.id;

    const newList = listItems.filter(function (listItem) {
        if(parseInt(id) !== listItem.id) {
            return true;
        }
    });

    listItems = newList;
    createList(listItems);
    
} 
