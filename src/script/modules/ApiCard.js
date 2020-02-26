class ApiCard {
    constructor(url, toDATA, fromDATA, apiKey) {
        this.baseUrl = url;
        this.apiKey = apiKey;
        this.toDATA = toDATA;
        this.fromDATA = fromDATA;
    }
    
    // CARDS 
    getCards(keyWord) {
        return fetch(
        `${this.baseUrl}` + `${keyWord}` + '&from=' + `${this.fromDATA}` + 
        '&to=' + `${this.toDATA}` + 'sortBy=popularity&pageSize=100&apiKey=' + `${this.apiKey}`, 
      {
        method: 'GET'
      })
        .then(result => {
            if (result.ok) {
              return result.json();
            }
            return Promise.reject(`Ошибка: ${result.status}`);
        });
    }
}


export {ApiCard};