import {cardContainer} from "./constants.js";

const nullRequest = document.querySelector('.null-request');
const resultHeadings = document.querySelector('.result-request');
const preloader = document.querySelector('.preloader');

function removeResults() {
  //cards
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
  //other results
  nullRequest.classList.remove('null-request_is-opened');
  resultHeadings.classList.add('result-request_closed');
}


function preloaderLoading(isLoading) {
  
  if (isLoading) {
    preloader.classList.add('preloader_is-opened');
  } else {
    preloader.classList.remove('preloader_is-opened');
  }
}
  
function nullResult() {
  nullRequest.classList.add('null-request_is-opened');
}
  
function showHeadings() {
  resultHeadings.classList.remove('result-request_closed');
};

function dateFormater(data) {

  let monthStore = [];
    monthStore[0] = "января";
    monthStore[1] = "февраля";
    monthStore[2] = "марта";
    monthStore[3] = "апреля";
    monthStore[4] = "мая";
    monthStore[5] = "июня";
    monthStore[6] = "июля";
    monthStore[7] = "августа";
    monthStore[8] = "сентября";
    monthStore[9] = "октября";
    monthStore[10] = "ноября";
    monthStore[11] = "декабря";
  

  const date = data.slice(0, 10).split('-');
  
  const year = date[0];
  const month = monthStore[date[1]-1]; 
  const day = date[2];

  const dateToReturn = day + ' ' + month + ', ' + year;

  return(dateToReturn);
}

export {preloaderLoading, nullResult, showHeadings, dateFormater, removeResults};

