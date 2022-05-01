const submitButton = document.getElementById('addNewBookButton');
let bookLibrary = [];


//Book constructor
function Book(author, title, pages, read) { 
    this.author = author
    this.title = title 
    this.pages = pages 
    this.read = read
}

submitButton.addEventListener('click', () => {
    //Create new book object using Book constructor
    const newBook = new Book(
        //Use form inputs as arguments
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').checked,
    );
    //Add new book to bookLibrary array
    bookLibrary.push(newBook);
    addBookToGrid(newBook);
})

//Takes book object created from Book constructor as argument to add book to grid 
function addBookToGrid(newBook) {
    const bookGridContainer = document.querySelector('.bookContainer');
    let bookElement = document.createElement('div');
    bookElement.classList.add('bookElements');
    //Adds element to grid
    bookGridContainer.appendChild(bookElement);
    //Passes newly created grid element and book object to function to create and store sub-elements of input
    addBookInfoToGridElement(bookElement, newBook);
    //Resets form input after adding a book
    clearForm();
}

function addBookInfoToGridElement(bookElement, newBook) {
    //Sub-elements to display book info
    let titleElement = document.createElement('p');
    let authorElement = document.createElement('p');
    let pagesElement = document.createElement('p');
    let readElement = document.createElement('p');
    
    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(pagesElement);
    bookElement.appendChild(readElement);
    
    titleElement.innerHTML = newBook.title
    authorElement.innerHTML = newBook.author
    pagesElement.innerHTML = newBook.pages
    readElement.innerHTML = newBook.read
}

function clearForm() {
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('pages').value = ""
    document.getElementById('read').checked = ""
}