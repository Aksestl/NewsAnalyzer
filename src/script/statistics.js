import "../styles/statistics.css";


const resultData = JSON.parse(localStorage.getItem('apiRes'));
const keyWord = localStorage.getItem('word');
console.log(resultData);

const searchWord = document.querySelector(".search-word");
searchWord.textContent = keyWord;

const totalResult = document.querySelector(".total-result");
totalResult.textContent = resultData.totalResults;

const weekQuantity = countWeekResults(keyWord);
const weekResult = document.querySelector(".week-result");
weekResult.textContent = weekQuantity;


function countWeekResults(word) {
    let titleCount = 0;
    const articles = resultData.articles;
    
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].title.toLowerCase().includes(word.toLowerCase())){
            titleCount +=1;
        }
    }
    return titleCount;
}
