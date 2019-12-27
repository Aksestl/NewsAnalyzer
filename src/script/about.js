import {urlGH, owner, repo} from "./constants.js";
import {ApiGitHub} from "./modules/ApiGitHub.js";
import {CardCommit} from "./modules/CardCommit.js"
import {CommitList} from "./modules/commitList.js"
import "../styles/about.css";
import Flickity from 'flickity';

const flickSlider = new Flickity( '.flickity', {
    // Настройки плагина
    cellAlign: 'center',
    contain: true,
    freeScroll: true,
    wrapAround: true,
    groupCells: 3
 
 });

const apiCommits = new ApiGitHub (urlGH, owner, repo);
console.log(apiCommits);
const cardCommit = (...args) => new CardCommit(...args);

addCommits();

function addCommits() {

    apiCommits.getCommits()
    .then(result => {
      new CommitList(flickSlider, result, cardCommit).renderCommits();
        
    })

    .catch((error) => {
      console.log(error);
    })
  
  }


