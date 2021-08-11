const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then(response => {
      //console.log('Request successful', response);
      return response.json();
    })
    .then(data => {
      data.forEach(function (book) {
        let newBook = document.createElement("div");
        newBook.setAttribute("id", "book");
        newBook.setAttribute("class", "text-center mb-5");
        newBook.textContent = "[Title: " + book.name + ", Author(s): " + book.authors + 
        ", Year: " + book.released.substring(0, 4) + ", Pages: " + book.numberOfPages + "]";
        app.append(newBook);
      })
      document.querySelector('#loading').remove();
    })
    .catch(error => {
      console.error('Request failed', error);
    })
};

fetchData(url);
