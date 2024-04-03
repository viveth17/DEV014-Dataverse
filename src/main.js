import { filterData } from './dataFunctions.js';
import { sortBySharkSize } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
// import {computeStats}from './dataFunctions.js';


const htmlElement = document.querySelector('html');
let statusData = data;
htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].appendChild(renderItems(statusData));

// Para seleccionar el <select> Filtrar
const selectElement = document.getElementsByName("locationOfTheSpecie")[0];
// Evento al elemento <select> 
selectElement.addEventListener('change', function () {
// capturar el valor seleccionado 
  const selectedValue = selectElement.value;
  // console.log('Opción seleccionada:', selectedValue);

  //filtrar los datos basados en el valor seleccionado
  const filteredData = filterData(data, 'facts.locationOfTheSpecie', selectedValue);
  statusData = filteredData;
  // console.log('filteredData', filterData);
  //renderizar los elementos filtrados 
  htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].replaceChildren(renderItems(statusData));
});

// Para seleccionar el <select> Ordenar
const sortElement = document.getElementsByName("maximumSizeMtr")[0];
// Evento al elemento <select> 
sortElement.addEventListener("change", function () {
  // Capturar el valor seleccionado 
  const sortValue = sortElement.value;

  // Ordenar la data basada en el valor seleccionado
  let sortedData;
  if (sortValue === 'asc') {
    sortedData = sortBySharkSize(statusData, 'maximumSizeMtr', 'asc');
  } else if (sortValue === 'desc') {
    sortedData = sortBySharkSize(statusData, 'maximumSizeMtr', 'desc');
  } else {
    // Manejar un caso por defecto
    sortedData = statusData;
  }
  statusData = sortedData 
  // Renderizar los elementos ordenados
  htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].replaceChildren(renderItems(statusData));
});

const buttonClear = document.getElementById('clearFilter');
buttonClear.addEventListener("click", ()=>{
  statusData= data;
  htmlElement.getElementsByTagName('body')[0].getElementsByTagName('div')[0].replaceChildren(renderItems(statusData));
})

// const longevityAverage = document.getElementById('longevityProm');
// longevityAverage.addEventListener("click", ()=>{
//   // console.log('evento',longevityAverage);
//   // calculeLongevity = computeStats(data);
// // console.log();

// })

renderItems(data);
