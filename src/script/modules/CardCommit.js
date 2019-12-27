import {dateFormater} from "./requestOptions.js";
class CardCommit {
    constructor(name, email, date, message, avatar) {
        this.name = name;
        this.email = email;
        this.date = date;
        this.message = message;
        this.avatar = avatar;

        this.commitElement = this.createCard();
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('flickity__card');     

        card.appendChild(this.createDate());
        card.appendChild(this.createBlock());
        card.appendChild(this.createInfo());
        
        return card;
    }

    createDate() {
        const date = document.createElement('p');
        date.classList.add('flickity__data', 'card__data');
        date.textContent = dateFormater(this.date);

        return date;
    }

    createBlock() {
        const block = document.createElement('div');
        block.classList.add('flickity__block');
        
        const image = document.createElement('img');
        image.classList.add('flickity__avatar');
        image.alt = 'Извините, данное изображение не доступно';
        image.src =  this.avatar;
        
        block.appendChild(image);
        block.appendChild(this.createAbout());

        return block;
    }  

    createAbout() {
        const about = document.createElement('div');
        about.classList.add('flickity__about');
        
        const name = document.createElement('h3');
        name.classList.add('flickity__name');
        name.textContent = this.name;
     
        const email = document.createElement('p');
        email.classList.add('flickity__email');
        email.textContent = this.email;
        
        about.appendChild(name);
        about.appendChild(email);

        return about;
    }  

    createInfo() {
        const info = document.createElement('p');
        info.classList.add('flickity__info');
        info.textContent = this.message;
        
        return info;
    }
}

export {CardCommit};