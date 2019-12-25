function preloaderLoading(isLoading) {
    const preloader = document.querySelector('.preloader');
  
    if (isLoading) {
      preloader.classList.add('preloader_is-opened');
    } else {
      preloader.classList.remove('preloader_is-opened');
    }
  }
  
  function nullRequest() {
    const nullRequest = document.querySelector('.null-request');
    nullRequest.classList.add('null-request_is-opened');
  }
  
  function resultHeadings() {
    const resultHeadings = document.querySelector('.result-request');
    resultHeadings.classList.remove('result-request_closed');
};

export {preloaderLoading, nullRequest, resultHeadings};