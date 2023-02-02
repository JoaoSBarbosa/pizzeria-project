const c = (elemento) => document.querySelector(elemento);

// mapeando o objeto
pizzaJson.map((item, index) => {
  // clonando a estrutura pizza-item
  let pizzaItem = c(".models .pizza-item").cloneNode(true);

  const p = (add) =>pizzaItem.querySelector(add);
// Adicionando os dados na estrutura
  p(".pizza-item--img img").src = item.img;
  p(".pizza-item--price").innerHTML = `R$ ${item.price.toFixed(2)}`;
  p(".pizza-item--name").innerHTML = item.name;
  p('.pizza-item--desc').innerHTML = item.description;

  //inserindo a estrutura clonada no area
  c(".pizza-area").append(pizzaItem);
});
