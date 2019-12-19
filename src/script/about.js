import "../styles/about.css";
import Flickity from 'flickity';

var flickSlider = new Flickity( '.flickity', {
    // Настройки плагина
    cellAlign: 'center',
    contain: true,
    freeScroll: true,
    wrapAround: true,
    groupCells: 3
 
 });