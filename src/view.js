export const renderItems = (data) => {
  // console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const ulElement = document.createElement('ul');
  data.forEach(item => {
    const liElement = document.createElement('li');
    liElement.setAttribute("class", "card");
    liElement.setAttribute("itemtype", item.nombreDeLaEspecie);
    liElement.setAttribute("itemscope", "");
    liElement.innerHTML = `
    <dl>
    <img src=${item.imageUrl} alt="Ada Lovelace" />
    <div>
    <h3 itemprop="name">${item.name}</h3>
    <h4 itemprop="nombre de la especie">${item.nombreDeLaEspecie}</h4>
    <p itemprop="shortDescription">${item.shortDescription}</p>
    </div>
    </dl>
  `


    // liElement.innerHTML = item.name;
    // console.log(liElement);
    ulElement.appendChild(liElement);
    // console.log(ulElement);


  });
  return ulElement;

};

