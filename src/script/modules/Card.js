class Card {
    constructor(res) {
        this.source = res.source.name;
        this.title = res.title;
        this.publishedAt = res.publishedAt;
        this.description = res.description;
        this.urlToImage = res.urlToImage;
        this.url = res.url;

        this.element = this.createCard();
    }

    createCard() {
        const card = document.createElement('a');
        card.classList.add('card', 'pointer');
        card.href = this.url;

        card.appendChild(this.createImage());
        card.appendChild(this.createDescription());

        return card;
    }

    createImage() {
        const image = document.createElement('img');
        image.classList.add('card__image');
        image.alt = 'Извините, данное изображение не доступно';
        image.src = this.urlToImage;
        image.onerror = () => {
            image.src = 'http://pixel-one.ru/uploads/posts/2017-10/1508524003_grumpy-cat.jpg';
        }

        return image;
    }

    createDescription() {
        const description = document.createElement('div');
        description.classList.add('card__description');
        
        const time = document.createElement('time');
        time.classList.add('card__data');
        time.textContent = dateFormater(this.publishedAt);
     

        const title = document.createElement('h3');
        title.classList.add('card__title');
        title.textContent = this.title;

        const article = document.createElement('p');
        article.classList.add('card__text');
        article.textContent = this.description;

        const source = document.createElement('p');
        source.classList.add('card__source');
        source.textContent = this.source;

        
        description.appendChild(time);
        description.appendChild(title);
        description.appendChild(article);
        description.appendChild(source);

        return description;
    }  
}

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

export {Card};
