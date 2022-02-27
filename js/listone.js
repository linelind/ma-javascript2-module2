// create list

function createList() {
    const listContainer = document.querySelector("ul");
    const container = document.querySelector(".listContainer");

    listContainer. innerHTML = "";

    if (books.length === 0) {
        container.innerHTML = `<p class="message">There are no more books in the list.</p>`;
    }  

    books.forEach(function (listItem) {
         listContainer.innerHTML += `<li><span>ISBN: ${listItem.isbn}, a ${listItem.title}</span> <i class="fa fa-trash" data-id="${listItem.isbn}"></i></li>`; 
    });

    const trashCans = document.querySelectorAll("li i");

    trashCans.forEach(function (can) {
        can.addEventListener("click", removeFromList);
    }); 

}
// filter

function removeFromList() {

    const id = event.target.dataset.id;

    const newList = books.filter(function (listItem) {
        if(id !== listItem.isbn) {
            return true;
        }
    });

    books = newList;

    createList();
}


window.onload = function() {
    createList();
  };