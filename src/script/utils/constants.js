// CARDS API
const url = 'https://newsapi.org/v2/everything?q=';
const apiKey = '8e6cd18fd5d942f4847199622bd3f541';

const data = new Date();
const weekAgo = 6*24*60*60*1000;
const timeAgo = new Date(data.getTime() - weekAgo);
const toDATA = data.toISOString().slice(0, 10);
const fromDATA = timeAgo.toISOString().slice(0, 10);
console.log(toDATA);
console.log(fromDATA);
// COMMITS API
const urlGH = 'https://api.github.com/repos/';
const owner = 'Aksestl';
const repo = 'NewsAnalyzer';

// INDEX PAGE
const cardContainer = document.querySelector('.news-list');
const inputButton = document.querySelector('.button__search');

export {url, toDATA, fromDATA, apiKey, weekAgo};
export {urlGH, owner, repo};
export {cardContainer, inputButton};

