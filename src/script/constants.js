// CARDS API
const url = 'https://newsapi.org/v2/everything?q=';
const apiKey = '9ef3db5805634a938277d66e4362684f';

const data = new Date();
const toDATA = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate();
console.log(toDATA);
const fromDATA = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + (data.getDate() - 7);
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

