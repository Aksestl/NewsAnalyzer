import {Card} from "./Card.js";

class NewsList{
    constructor(container, articles) {
      this.container = container;
      this.setCard = 3;
      this.addCards(articles, this.setCard);

      document.querySelector('.button__show-news')
      .onclick = () => this.moreCards(articles);
    }
        
    addCards(articles, setCard) {
      for (let i = 0; i < setCard; i++) {      
        const { element } = new Card(articles[i]);
        this.container.appendChild(element); 
      } 
    }

    // добавляем по 3 карточки при нажатии на кнопку
    moreCards(articles){
      articles.splice(0, 3);
      this.addCards(articles, this.setCard);
      
      // не показываем кнопку, когда закончился массив
      if (this.setCard >= articles.length) {
        document.querySelector('.button__show-news')
        .classList.add('button__show-news_hidden');
      }

    }
}

export {NewsList};