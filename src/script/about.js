import {urlGH, owner, repo} from "./utils/constants.js";
import {ApiGitHub} from "./modules/ApiGitHub.js";
import {CardCommit} from "../styles/blocks/flickity/__card/CardCommit.js"
import {CommitsList} from "../styles/blocks/flickity/CommitsList.js"
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
const cardCommit = (...args) => new CardCommit(...args);

addCommits();

function addCommits() {

  apiCommits.getCommits()
  .then(result => {
    new CommitsList(flickSlider, result, cardCommit)._renderCommits();    
  })
  .catch((error) => {
    console.log(error);
  })
}


