function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return title + " by " + author + " , " + pages + " pages, " + read + " yet";
    };
}

function addBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    addCard(myLibrary.length-1);
    document.querySelector(".popup").style.display = "none";
    emptyForm();
}

function displayAllBook() {
    const body = document.querySelector(".content");
    for (let i = 0; i < myLibrary.length; i++) {
        addCard(i)
    }
}

function addCard(index) {
    const body = document.querySelector(".content");
    const bookDiv = document.createElement("div");
    const titleHeader = document.createElement("h1");
    const authorHeader = document.createElement("p");
    const pagesHeader = document.createElement("p")
    const readHeader = document.createElement("p");
    const readButton = document.createElement("button")
    titleHeader.textContent = myLibrary[index].title;
    authorHeader.textContent = myLibrary[index].author;
    pagesHeader.textContent = myLibrary[index].pages;
    readHeader.textContent = myLibrary[index].read;
    readButton.textContent = "Change Read Status";
    bookDiv.appendChild(titleHeader);
    bookDiv.appendChild(authorHeader);
    bookDiv.appendChild(pagesHeader);
    bookDiv.appendChild(readHeader);
    bookDiv.appendChild(readButton);
    bookDiv.dataset.index = index;
    readButton.addEventListener("click", updateReadStatus);
    bookDiv.classList.toggle("book-card");
    readHeader.classList.toggle("read-text")
    readButton.classList.toggle("read-button");
    body.appendChild(bookDiv);
}

function updateReadStatus(event) {
    const card = event.target.parentElement;
    myLibrary[card.dataset.index].read = myLibrary[card.dataset.index].read === "read" ? "no read" : "read";
    document.querySelector("div[data-index='" + card.dataset.index + "'] > .read-text").textContent = myLibrary[card.dataset.index].read; 
}

function emptyForm() {
    document.querySelector("#title-error").style.display = "none";
    document.querySelector("#author-error").style.display = "none";
    document.querySelector("#page-error").style.display = "none";
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").checked = false;
}

const myLibrary = [];

document.querySelector(".new-book").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".opacity-overlay").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
    emptyForm();
});

document.querySelector("#add-button").addEventListener("click", () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const read = document.querySelector("#read");
    if (title.value.length > 0 && author.value.length > 0 && pages.value >= 1) {
        if (read.checked == true) {
            addBook(title.value, author.value, pages.value, "read");
        } else {
            addBook(title.value, author.value, pages.value, "not read");
        }
    } else {
        if (title.value.length == 0) {
            document.querySelector("#title-error").style.display = "block";
        } else {
            document.querySelector("#title-error").style.display = "none";
        }
        if (author.value.length == 0) {
            document.querySelector("#author-error").style.display = "block";
        } else {
            document.querySelector("#author-error").style.display = "none";
        }
        if (pages.value <= 0) {
            document.querySelector("#page-error").style.display = "block";
        } else {
            document.querySelector("#page-error").style.display = "none";
        }
    }
});

myLibrary.push(new Book("title", "author", "pages", "read"));
myLibrary.push(new Book("title", "author", "pages", "read"));
myLibrary.push(new Book("title", "author", "pages", "read"));

displayAllBook();