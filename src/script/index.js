import {ApiCard, url, toDATA, fromDATA, apiKey} from "./modules/ApiCard.js";
import {Card} from "./modules/Card.js";
import {NewsList} from "./modules/Newslist.js";
import {preloaderLoading, nullResult, showHeadings, removeResults} from "./modules/requestOptions.js";
import {handleValidate} from "./modules/validation.js";
import {cardContainer, inputButton} from "./constants.js";
import "../styles/index.css";


// ПОИСК НОВОСТЕЙ И ДОБАВЛЕНИЕ КАРТОЧЕК НА СТРАНИЦУ
const searchForm = document.forms.form;
const searchInput = searchForm.elements.news;
const apiCard = new ApiCard (url, toDATA, fromDATA, apiKey);
const newCard = (...args) => new Card(...args);
checkRes();

function newsSearchHandler(event) {
  event.preventDefault(); 
  removeResults();
  localStorage.clear();
  preloaderLoading(true);

  apiCard.getCards(searchInput.value)
  .then(result => {
    console.log(result);
    saveResults(result, searchInput.value);
  })
};

function saveResults(data, keyWord) {
  const apiResult = JSON.stringify(data);
  localStorage.setItem('apiRes', apiResult);
  localStorage.setItem('word', keyWord);
  showResults();
}

function showResults() { 
  const cardsData = JSON.parse(localStorage.getItem('apiRes'));
  if (cardsData.totalResults !== 0) {
    searchInput.value = localStorage.getItem('word');
    new NewsList(cardContainer, cardsData.articles, newCard);
    preloaderLoading(false);
    showHeadings();
  } 
    else {
      preloaderLoading(false);
      nullResult();
    } 
}

function checkRes() {
  if (localStorage.length !== 0 ) {
    showResults();
  }
} 


document.forms.form.addEventListener('submit', newsSearchHandler);
document.querySelector('.button__search').addEventListener("click", newsSearchHandler);
searchInput.addEventListener('input', handleValidate);

export {searchForm, inputButton};