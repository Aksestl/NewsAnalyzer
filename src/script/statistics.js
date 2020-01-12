import "../styles/statistics.css";

// получили данные
const resultData = JSON.parse(localStorage.getItem('apiRes'));
console.log(resultData);
const keyWord = localStorage.getItem('word');
const pipes = document.querySelectorAll('.chart__pipe');
const week = 6;

// подставили значения шапки
const searchWord = document.querySelector(".search-word");
searchWord.textContent = keyWord;

const totalResult = document.querySelector(".total-result");
totalResult.textContent = resultData.totalResults;

const weekQuantity = countWeekResults(keyWord);
const weekResult = document.querySelector(".week-result");
weekResult.textContent = weekQuantity;

function countWeekResults(word) {
    let titlesCount = 0;
    const articles = resultData.articles;

    for (let i = 0; i < articles.length; i++) {
        if (articles[i].title.toLowerCase().includes(word.toLowerCase())){
           titlesCount ++;
        }
    }
    return titlesCount;
}

// проставляем текущий месяц на линии
const date = new Date();
const formatterMonth = new Intl.DateTimeFormat("ru", {
  month: "long",
});
const currentMonth = document.querySelector(".current-month");
currentMonth.textContent = formatterMonth.format(date);

// текущие даты и день недели в графике
const chartDays = document.querySelectorAll('.chart__day');
chartData();

function chartData() {
    let weekData = [];

    for (let i = week; i >= 0; i--) {
        const day = new Date(new Date().getTime() - i*24*60*60*1000).toLocaleDateString('ru', { day: "numeric"});
        const dayWeek = new Date(new Date().getTime() - i*24*60*60*1000).toLocaleDateString('ru', { weekday: "short"});
        const chartItemData = day + ', ' + dayWeek;
        weekData.push(chartItemData);
    }
    addChartData(weekData);
}

function addChartData(array) {
    for (let i = 0; i < array.length; i++ ) {
        chartDays[i].textContent = array[i];
    }
}

// столбцы графика
daysCount();

function daysCount() {

    const daysNews = {};

    resultData.articles.forEach(item => {
      const day = new Date(item.publishedAt.substring(0, 10)).getDate();

      if (day in daysNews) {
        daysNews[day]++;
      }
        else {
        daysNews[day] = 1;
        }
    });
    
    const data = new Date();
    const daysList = data.getDate();
    const currentWeek = new Map();
    for (let i = 6; i >= 0; i--) {
        currentWeek.set(daysList - i, 0);
    }
    const objCurrentWeek = Object.fromEntries(currentWeek.entries());
    const showResult = Object.assign(objCurrentWeek, daysNews);

    makeBluePipes(showResult);
}

function makeBluePipes(data) {
    const countData = Object.values(data);

    for(let i = 0; i < countData.length; i++) {
        if (countData[i] !== 0) {
        
            pipes[i].style.width = `${countData[i]}%`;
            pipes[i].textContent = countData[i];
            pipes[i].style.background = '#2F71E5';
        } else {
            pipes[i].style.width = 0;
            pipes[i].textContent = 0;
            pipes[i].style.color = 'black';
        }
    }
}
