import bookDatas from './dataV1.js';
const headerBarCard2Heading = document.getElementById('headerBarCard2Heading');
const categoriesListCard = document.getElementById('CateGoriesList');
const categoriesListCardXicon = document.getElementById('categoriesListCardXicon');
const categoriesToogleButton = document.getElementById('categoriesToogleButton');
const contentArea = document.querySelector('.contentArea');

categoriesToogleButton.addEventListener('click', () => {
  categoriesListCard.classList.toggle('open');
});
categoriesListCardXicon.addEventListener('click', () => {
  categoriesListCard.classList.remove('open');
});
// document.addEventListener('click', (e) => {
//   if(categoriesListCard.classList.contains('open') && !categoriesListCard.contains(e.target) && e.target !== categoriesToogleButton) {
//     categoriesListCard.classList.remove('open');
//   }
// })

let currentGenreId = localStorage.getItem('currentGenreId') ? localStorage.getItem('currentGenreId') : 0;

function createBookCard(book) {
  // console.log(book.id)
  const a = document.createElement('a');
  const booksContainer = document.createElement('div');
  booksContainer.className = 'booksContainer';
  booksContainer.dataset.bookId = book.id;

  const bookcoverDiv = document.createElement('div');
  bookcoverDiv.className = 'bookcover';

  const img = document.createElement('img');
  img.src = book.image;
  img.alt = book.title + ' cover';
  bookcoverDiv.appendChild(img);

  const bookDetailsDiv = document.createElement('div');
  bookDetailsDiv.className = 'bookDetails';

  const title = document.createElement('h2');
  title.className = 'bookName';
  title.textContent = book.title;

  const author = document.createElement('p');
  author.className = 'author';
  author.textContent = book.author;

  bookDetailsDiv.appendChild(title);
  bookDetailsDiv.appendChild(author);

  booksContainer.appendChild(bookcoverDiv);
  booksContainer.appendChild(bookDetailsDiv);
  
  a.href = `./bookDetails?id=${book.id}`;
  a.appendChild(booksContainer);
  return a;
}


const genreName = ['fiction', 'nonFiction', 'mystery', 'scienceFiction', 'history', 'childrensBooks', 'fantasy', 'romance'];
function RenderCurrentGenreBooks(currentGenreId) {
  currentGenreId = localStorage.getItem('currentGenreId')
  headerBarCard2Heading.innerHTML = '';
  contentArea.innerHTML = '';

  const currentGenre = genreName[currentGenreId];
  console.log(currentGenre, 'cuurentGenre')

  const currentGenreBooks = bookDatas.filter(book => book.genre === currentGenre);

  currentGenreBooks.forEach((book, index) => {
    const bookCard = createBookCard(book, index);
    contentArea.appendChild(bookCard);
  });

  headerBarCard2Heading.textContent = currentGenre.charAt(0).toUpperCase() + currentGenre.slice(1);
}


RenderCurrentGenreBooks(currentGenreId);

function changeCurrentGenreId(id) {
  localStorage.setItem('currentGenreId', id)
  currentGenreId = id;
  RenderCurrentGenreBooks(currentGenreId);
}

document.querySelectorAll('.categoriesItems li').forEach((li, idx) => {
  li.addEventListener('click', () => changeCurrentGenreId(idx));
});




function createRecommendationCard(imagePath, bookTitle, bookId) {
  const a = document.createElement('a');
  const card = document.createElement("div");
  card.className = "recommentationBooksList";

  const img = document.createElement("img");
  img.src = imagePath;

  const nameBox = document.createElement("div");
  nameBox.className = "recommentationBooksListName";

  const title = document.createElement("p");
  title.textContent = bookTitle;

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-angle-right";

  nameBox.appendChild(title);
  nameBox.appendChild(icon);

  card.appendChild(img);
  card.appendChild(nameBox);
  a.href = `./bookDetails?id=${bookId}`;
  a.appendChild(card);
  return a;
}

function getRandomIndexs(count = 6, max = bookDatas.length) {
  const nums = Array.from({ length: max }, (_, i) => i); // FIXED
  const result = [];

  while (result.length < count) {
    const idx = Math.floor(Math.random() * nums.length);
    result.push(nums[idx]);
    nums.splice(idx, 1);
  }

  return result;
}

const recommentationBooks = document.getElementById("RecommentationBooks");

function generateRandomeRecommentation() {
  recommentationBooks.innerHTML = '';
  const recommendationList = getRandomIndexs();

  recommendationList.forEach(id => {
    const { image, title } = bookDatas[id];
    const bookCard = createRecommendationCard(image, title, id);
    recommentationBooks.appendChild(bookCard);
  });
}

generateRandomeRecommentation();
