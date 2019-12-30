import {dateFormater} from "../../../../script/utils/requestOptions.js";
class CardCommit {
    constructor(name, email, date, message, avatar) {
        this._name = name;
        this._email = email;
        this._date = date;
        this._message = message;
        this._avatar = avatar;

        this.commitElement = this._createCard();
    }

    _createCard() {
        const card = document.createElement('div');
        card.classList.add('flickity__card');     

        card.appendChild(this._createDate());
        card.appendChild(this._createBlock());
        card.appendChild(this._createInfo());
        
        return card;
    }

    _createDate() {
        const date = document.createElement('p');
        date.classList.add('flickity__data', 'card__data');
        date.textContent = dateFormater(this._date);

        return date;
    }

    _createBlock() {
        const block = document.createElement('div');
        block.classList.add('flickity__block');
        
        const image = document.createElement('img');
        image.classList.add('flickity__avatar');
        image.alt = 'Извините, данное изображение не доступно';
        image.src =  this._avatar;
        
        block.appendChild(image);
        block.appendChild(this._createAbout());

        return block;
    }  

    _createAbout() {
        const about = document.createElement('div');
        about.classList.add('flickity__about');
        
        const name = document.createElement('h3');
        name.classList.add('flickity__name');
        name.textContent = this._name;
     
        const email = document.createElement('p');
        email.classList.add('flickity__email');
        email.textContent = this._email;
        
        about.appendChild(name);
        about.appendChild(email);

        return about;
    }  

    _createInfo() {
        const info = document.createElement('p');
        info.classList.add('flickity__info');
        info.textContent = this._message;
        
        return info;
    }
}

export {CardCommit};