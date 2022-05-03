const submitButton = document.getElementById('addNewBookButton');
let bookLibrary = [];

//Book constructor
class Book { 
    constructor(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
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
    
    //Creates delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add(`deleteButton${bookLibrary.length}`); 
    deleteButton.innerHTML = 'Delete';

    //Creates read toggle button
    let readToggleButton = document.createElement('button');
    readToggleButton.classList.add(`readButton${bookLibrary.length}`);
    readToggleButton.innerHTML = 'Read';
    
    //Append sub-elements to book element
    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(pagesElement);
    bookElement.appendChild(readElement);
    bookElement.appendChild(deleteButton);
    bookElement.appendChild(readToggleButton);
    
    //Sub-elements display text set to input of book instance
    titleElement.innerHTML = newBook.title
    authorElement.innerHTML = newBook.author
    pagesElement.innerHTML = newBook.pages

    //Sets initial read status
    if (newBook.read == true) {
        readElement.innerHTML = 'Read'
    }
    else if (newBook.read == false) {
        readElement.innerHTML = 'Not Read'
    }

    //Event listener for each book element delete button to delete that specific book element when clicked
    const deleteButtonListener = document.querySelector(`.deleteButton${bookLibrary.length}`);
    deleteButtonListener.addEventListener('click', () => {
        bookElement.remove()
    })

    //Toggle button listener for each book element to toggle read status on that specific book element 
    const toggleButtonListener = document.querySelector(`.readButton${bookLibrary.length}`);
    toggleButtonListener.addEventListener('click', () => {
        //Checks user input and returns opposite
        if (newBook.read) {
            readElement.innerHTML = 'Not Read'
            return newBook.read = false;
        }
        else if (newBook.read == false) {
            readElement.innerHTML = 'Read'
            return newBook.read = true;
        }
        else {
            console.log('wrong');
        }
    }) 
}

//Sets input boxes on form to empty string to clear form and prepare form for more input
function clearForm() {
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('pages').value = ""
    document.getElementById('read').checked = ""
}

