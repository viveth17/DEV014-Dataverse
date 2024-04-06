import { filterData } from './dataFunctions.js';
import { sortBySharkSize } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
import { computeStats } from './dataFunctions.js';


const htmlElement = document.querySelector('html');
let statusData = data;
htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].appendChild(renderItems(statusData));

const selectElement = document.getElementsByName("locationOfTheSpecie")[0];
selectElement.addEventListener('change', function () {
  const selectedValue = selectElement.value;
  if (selectedValue === 'Todas') {
    htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].replaceChildren(renderItems(data));
  } else {
    const filteredData = filterData(data, 'facts.locationOfTheSpecie', selectedValue);
    statusData = filteredData;
    htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].replaceChildren(renderItems(statusData));
  }
});

const sortElement = document.getElementsByName("maximumSizeMtr")[0];
sortElement.addEventListener("change", function (event) {
  const sortValue = event.target.value;

  let sortedData;
  if (sortValue === 'asc') {
    sortedData = sortBySharkSize(statusData, 'maximumSizeMtr', 'asc');
  } else if (sortValue === 'desc') {
    sortedData = sortBySharkSize(statusData, 'maximumSizeMtr', 'desc');
  } else {
    sortedData = statusData;
  }
  statusData = sortedData
  htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].replaceChildren(renderItems(statusData));
});

const buttonClear = document.getElementById('clearFilter');
buttonClear.addEventListener("click", () => {
  statusData = data;
  htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].replaceChildren(renderItems(statusData));
  document.querySelector('#locationOfTheSpecie').value = 'Todas';
  document.querySelector('#longevityText').innerHTML = 'Longevidad promedio:';
})

const longevityAverage = document.querySelector('#longevityProm');
const longevityText = document.querySelector('#longevityText');
longevityAverage.addEventListener("click", () => {
  longevityText.innerHTML = 'Longevidad promedio: ' + computeStats(statusData) + ' años';

})

renderItems(data);
