import { dateFormater } from "../../../../../script/utils/requestOptions.js";
class Card {
    constructor(name, title, publishedAt, description, urlToImage, url) {
        this._source = name;
        this._title = title;
        this._publishedAt = publishedAt;
        this._description = description;
        this._urlToImage = urlToImage;
        this._url = url;

        this._element = this._createCard();
    }

    _createCard() {
        const card = document.createElement('a');
        card.classList.add('card', 'pointer');
        card.href = this._url;

        card.appendChild(this._createImage());
        card.appendChild(this._createDescription());

        return card;
    }

    _createImage() {
        const image = document.createElement('img');
        image.classList.add('card__image');
        image.alt = 'Извините, не удалось загрузить фотографию';
        image.src = this._urlToImage;
        image.onerror = () => {
            image.src = 'http://pixel-one.ru/uploads/posts/2017-10/1508524003_grumpy-cat.jpg';
        }

        return image;
    }

    _createDescription() {
        const description = document.createElement('div');
        description.classList.add('card__description');
        
        const time = document.createElement('time');
        time.classList.add('card__data');
        time.textContent = dateFormater(this._publishedAt);
     

        const title = document.createElement('h3');
        title.classList.add('card__title');
        title.textContent = this._title;

        const article = document.createElement('p');
        article.classList.add('card__text');
        article.textContent = this._description;

        const source = document.createElement('p');
        source.classList.add('card__source');
        source.textContent = this._source;

        
        description.appendChild(time);
        description.appendChild(title);
        description.appendChild(article);
        description.appendChild(source);

        return description;
    }  
}



export {Card};
