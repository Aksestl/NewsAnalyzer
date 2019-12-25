const url = 'https://newsapi.org/v2/everything?q=';
const apiKey = 'af8a7a2cafc54df39dafa76f1bacc38a';

const data = new Date();
const toDATA = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate();
console.log(toDATA);
const fromDATA = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + (data.getDate() - 7);
console.log(fromDATA);

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