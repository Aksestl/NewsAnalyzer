import {url, toDATA, fromDATA, apiKey} from "../constants.js";

class ApiCard {
    constructor(url, toDATA, fromDATA, apiKey) {
        this.baseUrl = `${url}`;
        this.apiKey = apiKey;
        this.toDATA = toDATA;
        this.fromDATA = fromDATA;
    }
    
    // CARDS 
    getCards(keyWord) {
        return fetch(
        `${this.baseUrl}` + `${keyWord}` + '&from=' + `${this.fromDATA}` + 
        '&to=' + `${this.toDATA}` + '&pageSize=100&apiKey=' + `${this.apiKey}`,  
      {
        method: 'GET'
      })
        .then(result => {
            if (result.ok) {
              return result.json();
            }
            
            return Promise.reject(`Ошибка: ${result.status}`);
        })
            .then((result) => { 
              console.log(result);
              return result;
            })
               
            .catch(error => {
                console.log(error);
            });
    }

 
}


export {ApiCard, url, toDATA, fromDATA, apiKey};