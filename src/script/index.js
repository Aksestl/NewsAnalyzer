import {ApiCard} from "./modules/ApiCard.js";
import {Card} from "../styles/blocks/result-request/news-list/card/Card.js";
import {NewsList} from "../styles/blocks/result-request/news-list/Newslist.js";
import {preloaderLoading, nullResult, showHeadings, removeResults} from "./utils/requestOptions.js";
import {handleValidate} from "./utils/validation.js";
import {cardContainer, inputButton, url, toDATA, fromDATA, apiKey} from "./utils/constants.js";
import "../styles/index.css";


// ПОИСК НОВОСТЕЙ И ДОБАВЛЕНИЕ КАРТОЧЕК НА СТРАНИЦУ
const searchForm = document.forms.form;
const searchInput = searchForm.elements.news;
const apiCard = new ApiCard (url, toDATA, fromDATA, apiKey);
const newCard = (...args) => new Card(...args);


function newsSearchHandler(event) {
  event.preventDefault(); 
  removeResults();
  preloaderLoading(true);
  searchInput.setAttribute('disabled', true);

  apiCard.getCards(searchInput.value)
  .then(result => {
    checkResult(result.articles);
    searchInput.removeAttribute('disabled');
    
    localStorage.clear();
    const apiRes = JSON.stringify(result);
    localStorage.setItem('apiRes', apiRes);
    localStorage.setItem('word', searchInput.value);

  })
  .catch(error => {
    console.log(error);
    return Promise.reject(`Ошибка: ${err.status}`);
  })
  .finally(() =>{
    searchInput.removeAttribute('disabled');
  });
};

if (localStorage.getItem('apiRes') !== null) {
  searchInput.value = localStorage.getItem('word');
  const cardsData = JSON.parse(localStorage.getItem('apiRes'));
  checkResult(cardsData.articles);
};


function checkResult(data) {
  if (data.length == 0) {
    localStorage.clear();
    preloaderLoading(false);
    nullResult();
  } 
    else {
      preloaderLoading(false);
      showHeadings(); 
      showResults(data);       
    } 
};

function showResults(data) {
  new NewsList(cardContainer, data, newCard)._renderCards();
}

document.forms.form.addEventListener('submit', newsSearchHandler);
document.querySelector('.button__search').addEventListener("click", newsSearchHandler);
searchInput.addEventListener('input', handleValidate);

export {searchForm, inputButton};