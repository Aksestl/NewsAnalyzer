import "../styles/statistics.css";

// получили данные
const resultData = JSON.parse(localStorage.getItem('apiRes'));
const keyWord = localStorage.getItem('word');
console.log(resultData);

// подставили значения шапки
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

// проставляем текущий месяц на линии
const date = new Date();
const formatterMonth = new Intl.DateTimeFormat("ru", {
  month: "long",
});
const currentMonth = document.querySelector(".current-month");
currentMonth.textContent = formatterMonth.format(date);

// текущие даты и день недели в графике

const chartDay = document.querySelectorAll('.chart__day');
chartData();

function chartData() {
    let weekData = [];

    for (let i = 6; i >= 0; i--) {
        const day = new Date(new Date().getTime() - i*24*60*60*1000).toLocaleDateString('ru', { day: "numeric"});
        const dayWeek = new Date(new Date().getTime() - i*24*60*60*1000).toLocaleDateString('ru', { weekday: "short"});
        const chartItemData = day + ', ' + dayWeek;
        weekData.push(chartItemData);
    }
    addChartData(weekData);
}

function addChartData(array) {
    for (let i = 0; i < array.length; i++ ) {
        chartDay[i].textContent = array[i];
    }
}
dayCount();
// столбцы графика
dayCount();

function dayCount() {
    const dayNews = {};

    resultData.articles.forEach(item => {
      const day = new Date(item.publishedAt.substring(0, 10)).getDate();

      if (day in dayNews) {
        dayNews[day]++;

      } else {
        dayNews[day] = 1;
        }
    });

    makeBluePipes(dayNews);
}

function makeBluePipes(data) {
    const pipe = document.querySelectorAll('.chart__pipe');

    for(let i = 0; i < Object.values(data).length; i++) {
        if (Object.values(data)[i] != 0) {
        
            const pipeWidth = (Object.values(data)[i] / resultData.totalResults) * 100;
            console.log(pipeWidth);
            pipe[i].style.width = `${pipeWidth}%`;
            pipe[i].textContent = Object.values(data)[i];
            pipe[i].style.background = '#2F71E5';

        }   else {
            pipe[i].style.width = 0;
            pipe[i].textContent = 0;
            pipe[i].style.color = 'black';
        }
    }
}
