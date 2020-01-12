class ApiGitHub {
    constructor(urlGH, owner, repo) {
        this.baseUrl = urlGH;
        this.owner = owner;
        this.repo = repo;
    }
    // CARDS 
    getCommits() {
        return fetch(
        `${this.baseUrl}` + `${this.owner}`+ '/' + `${this.repo}` + 
        '/commits',  
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
            });
    }
}

export {ApiGitHub};