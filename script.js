const submitButton = document.getElementById('addNewBookButton');



//Book constructor
function Book(author, title, pages, read) { 
    this.author = author
    this.title = title 
    this.pages = pages 
    this.read = read
}

submitButton.addEventListener('click', () => {
    const book = new Book(
        document.getElementById('title'),
        document.getElementById('author'),
        document.getElementById('pages'),
        document.getElementById('read'),
    )
    console.log(book)
})