let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return title + " by " + author + " , " + pages + " pages, " + read + " yet";
    };
}

function addBookToLibrary() {
    const title = prompt("title");
    const author = prompt("author");
    const pages = prompt("pages");
    const read = prompt("read");
    myLibrary.push(new Book(title, author, pages, read));
}

function displayBook() {
    const body = document.querySelector(".content");
    myLibrary.forEach((currentValue) => {
        const bookDiv = document.createElement("div");
        const titleHeader = document.createElement("h1");
        const authorHeader = document.createElement("p");
        const pagesHeader = document.createElement("p")
        const readHeader = document.createElement("p");
        titleHeader.textContent = currentValue.title;
        authorHeader.textContent = currentValue.author;
        pagesHeader.textContent = currentValue.pages;
        readHeader.textContent = currentValue.read;
        bookDiv.appendChild(titleHeader);
        bookDiv.appendChild(authorHeader);
        bookDiv.appendChild(pagesHeader);
        bookDiv.appendChild(readHeader);
        bookDiv.classList.toggle("book-card");
        body.appendChild(bookDiv);
    });
}