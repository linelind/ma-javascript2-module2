function createList() {
    const listContainer = document.querySelector("ul");

    listContainer. innerHTML = "";


    books.forEach(function (item) {
         listContainer.innerHTML += `<li>ISBN: ${item.isbn}, a ${item.title} <i class="fa fa-trash" data-item="${item}"></i></li>`; 
    });

    const trashCans = document.querySelectorAll("li i");

    trashCans.forEach(function (can) {
        can.addEventListener("click", removeBook);
    });

}

createList();

function removeBook() {
    console.log(event);

    const deleteBook = event.target.dataset.item;

    const newList = books.filter(function (item) {
        if (deleteBook !== item) {
            return true;
        }
    });

    books = newList;

    createList();
}