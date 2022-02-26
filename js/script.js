function createList() {
    const listContainer = document.querySelector("ul");

    listContainer. innerHTML = "";

    if (books.length === 0) {
        listContainer.innerHTML = "<p>There are no more elements in the list.</p>";
    }

    books.forEach(function (item) {
         listContainer.innerHTML += `<li>ISBN: ${item.isbn}, a ${item.title} <i class="fa fa-trash"></i></li>`; 
    });

    const trashCans = document.querySelectorAll("li i");

    trashCans.forEach(function (can) {
        can.addEventListener("click", removeFromList);
    });

}

function removeFromList() {

    const deleteBook = event.target.offsetParent;

    const newList = books.filter(function (item) {
        if (deleteBook !== item) {
            return true;
        }
    });

    books = newList;
}

window.onload = function() {
    createList();
  };