// CARDS API
const url = 'https://newsapi.org/v2/everything?q=';
const apiKey = '8e6cd18fd5d942f4847199622bd3f541';

const data = new Date();
const toDATA = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate();
const fromDATA = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + (data.getDate() - 6);
console.log(toDATA);
console.log(fromDATA);
// COMMITS API
const urlGH = 'https://api.github.com/repos/';
const owner = 'Aksestl/';
const repo = 'NewsAnalyzer/';

// INDEX PAGE
const cardContainer = document.querySelector('.news-list');
const inputButton = document.querySelector('.button__search');

export {url, toDATA, fromDATA, apiKey};
export {urlGH, owner, repo};
export {cardContainer, inputButton};

