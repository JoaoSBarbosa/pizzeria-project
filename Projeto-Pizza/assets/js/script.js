const c = (elemento) => document.querySelector(elemento);
// mapeando o objeto
pizzaJson.map((item, index)=>{
   // clonando a estrutura pizza-item
   let pizzaItem = c('.models .pizza-item').cloneNode(true);
   //inserindo a estrutura clonada no area
   c('.pizza-area').append(pizzaItem)
})