import {searchForm, inputButton} from "../index.js";
const error = document.querySelector('.search__error'); 

function handleValidate (event) {
    event.preventDefault();
  
    validInput(event.target);
    inputButton.disabled = !searchForm.checkValidity();
  }
  
  function validInput(input) {   
    if (input.validity.valueMissing || input.validity.tooShort) {
      error.classList.remove('search__error_hidden');
      return false;
    } else if (input === 0) {
        error.classList.remove('search__error_hidden');
        return false;
      }
    else {
      error.classList.add('search__error_hidden');
      return true;
    }  
};

export {handleValidate};