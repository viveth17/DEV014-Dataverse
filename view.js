export const renderItems = (data) => {
  const ulElement = document.createElement('ul');
  data.forEach(item => {
    const liElement = document.createElement('li');
    liElement.setAttribute("class", "card");
    liElement.setAttribute("itemtype", item.nombreDeLaEspecie);
    liElement.setAttribute("itemscope", "");
    liElement.innerHTML = `
    <dl>
    <img src=${item.imageUrl} alt="tiburones" />
    <div>
    <h3 itemprop="name">${item.name}</h3>
    <h4 itemprop="nombre de la especie">${item.nombreDeLaEspecie}</h4>
    <p itemprop="shortDescription">${item.shortDescription}</p>
    <p itemprop="maximumSizeMtr" class="numberMts">${item.maximumSizeMtr}</p>
    </div>
    </dl>
  `

    ulElement.appendChild(liElement);


  });
  return ulElement;

};

