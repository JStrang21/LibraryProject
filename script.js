const submitButton = document.getElementById('addNewBookButton');
let bookLibrary = [];
let deleteButtonArray = [];


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
    bookElement.classList.add(`bookElements`);
    bookElement.classList.add(`bookElements${bookLibrary.length}`);
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
    
    let deleteButton = document.createElement('button');
    deleteButton.classList.add(`deleteButton${bookLibrary.length}`) 
    deleteButton.innerHTML = 'Delete';
    deleteButtonArray.push(deleteButton);

    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(pagesElement);
    bookElement.appendChild(readElement);
    bookElement.appendChild(deleteButton);
    
    titleElement.innerHTML = newBook.title
    authorElement.innerHTML = newBook.author
    pagesElement.innerHTML = newBook.pages
    readElement.innerHTML = newBook.read

    const deleteButtonListener = document.querySelector(`.deleteButton${bookLibrary.length}`);
    deleteButtonListener.addEventListener('click', () => {
        bookElement.remove()
    })
}

function clearForm() {
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('pages').value = ""
    document.getElementById('read').checked = ""
}

