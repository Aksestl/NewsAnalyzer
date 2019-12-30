class NewsList{
    constructor(container, articles, newItem) {
      this._container = container;
      this._newItem = newItem;
      this._articles = articles;
      this._setCard = 3;
      this._itemCard = 0;

      document.querySelector('.button__show-news')
      .onclick = () => this._renderCards();
    }
        
    _addCards(...args) {
      const { _element } = this._newItem(...args);
      this._container.appendChild(_element);
    }

    // добавляем по 3 карточки при нажатии на кнопку
    _renderCards(){
      const resItems = this._articles;
      for (let i = this._itemCard; i < Math.min(this._itemCard + this._setCard, resItems.length); i++) {
        const item = resItems[i];
        
        this._addCards(item.source.name, item.title, item.publishedAt, item.description, item.urlToImage,  
        item.url);
      }
  
      this._itemCard += this._setCard;
      if ( this._itemCard >= this._articles.length) {
        document.querySelector('.button__show-news')
        .classList.add('button__show-news_hidden');
        }
        return;
    }
}

export {NewsList};