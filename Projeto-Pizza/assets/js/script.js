const c = (elemento) => document.querySelector(elemento);

// mapeando o objeto
pizzaJson.map((item, index) => {
  // clonando a estrutura pizza-item
  let pizzaItem = c(".models .pizza-item").cloneNode(true);

  pizzaItem.setAttribute("data-key", index);

  const p = (add) => pizzaItem.querySelector(add);

  // Adicionando os dados na estrutura
  p(".pizza-item--img img").src = item.img;
  p(".pizza-item--price").innerHTML = `R$ ${item.price.toFixed(2)}`;
  p(".pizza-item--name").innerHTML = item.name;
  p(".pizza-item--desc").innerHTML = item.description;

  // Adicionando evento do modal na tag a
  p("a").addEventListener("click", (evento) => {
    evento.preventDefault(); // prevenindo o evento padrão
    let key = evento.target.closest('.pizza-item').getAttribute('data-key');
    
    c('.imgs').src = pizzaJson[key].img;
    c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
   


    c(".pizzaWindowArea").style.opacity = 0;
    c(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      c(".pizzaWindowArea").style.opacity = 1;
    }, 200);
  });

  //inserindo a estrutura clonada no area
  c(".pizza-area").append(pizzaItem);
});
