export const filterData = (data, filterBy, value) => {
  console.log('data', data);
  console.log('filterBy', filterBy);
  console.log('value', value);
  const filteredData = data.filter(item => {
    const filterParts = filterBy.split('.');
    let obj = item;
    for (let i = 0; i < filterParts.length; i++) {
      obj = obj[filterParts[i]];
    }
    return obj === value;
  });
  console.log('filteredData', filteredData);
  // Devuelve el arreglo filtrado
  return filteredData;
};


