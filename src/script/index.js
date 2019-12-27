import {ApiCard, url, toDATA, fromDATA, apiKey} from "./modules/ApiCard.js";
import {Card} from "./modules/Card.js";
import {NewsList} from "./modules/Newslist.js";
import {preloaderLoading, nullRequest, resultHeadings} from "./modules/requestOptions.js";
import {handleValidate} from "./modules/validation.js";
import "../styles/index.css";

const apiCard = new ApiCard (url, toDATA, fromDATA, apiKey);
console.log(apiCard);


// ПОИСК НОВОСТЕЙ И ДОБАВЛЕНИЕ КАРТОЧЕК НА СТРАНИЦУ
const cardContainer = document.querySelector('.news-list');
const cardButton = document.getElementById('card-button');
const searchForm = document.forms.form;
const searchInput = searchForm.elements.news;
const inputButton = document.querySelector('.button__search');
const newCard = (...args) => new Card(...args);
let newsList = [];


function newsSearchHandler(event) {
  event.preventDefault(); 
      
  preloaderLoading(true);
  

  apiCard.getCards(searchInput.value)
  .then(result => {
      newsList = new NewsList(cardContainer, result.articles, newCard);
      cardsStorage(searchInput.value, result);
      console.log(cardsStorage);
    
    resultHeadings();
  
  })

  .catch((error) => {
    console.log( `${error}`+ 
      '   Во время запроса произошла ошибка.',
      'Возможно, проблема с соединением или сервер недоступен.',
      'Подождите немного и попробуйте ещё раз.'
    );
  })

  .finally(()=> { 
    preloaderLoading(false);
    if (newsList.length === 0) {
      nullRequest();
    }
  });
  
}



document.forms.form.addEventListener('submit', newsSearchHandler);
document.querySelector('.button__search').addEventListener("click", newsSearchHandler);
searchInput.addEventListener('input', handleValidate);


function cardsStorage(keyWord, result) {
  let apiResult = JSON.stringify(result);
  localStorage.clear();
  localStorage.setItem('apiRes', apiResult);
  localStorage.setItem('word', keyWord);
}

export {searchForm, inputButton};