import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';


const htmlElement = document.querySelector('html');

htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].appendChild(renderItems(data));





console.log(example, renderItems(data), data);

renderItems(data);
