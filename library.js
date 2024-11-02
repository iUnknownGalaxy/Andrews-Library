const myLibrary = [];
const displayBooksButton = document.getElementById("button");

function Book(title, author, numberOfPages, bookWasRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    if(bookWasRead) {
        this.bookWasRead = "already read"
    } else {
        this.bookWasRead = "not read yet"
    }

    this.info = function() {
        return this.title + " by " + this.author + ", " + this.numberOfPages + " pages, " + this.bookWasRead;
    }
}

function addBookToLibrary(title, author, numberOfPages, bookWasRead) {
    book = new Book(title, author, numberOfPages, bookWasRead)
    myLibrary[myLibrary.length] = book;
}

function displayBooks() {
    myLibrary.forEach((book) => {
        console.log(book.info());
    });
}


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Book 2", "Andrew W.", 69, true);
addBookToLibrary("Book 3", "Jenn Q.", 420, true);
displayBooks();