const c = (elemento) => document.querySelector(elemento);
const cs = (elemento) => document.querySelectorAll(elemento);
let modalQuatidade = 1;

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
    let key = evento.target.closest(".pizza-item").getAttribute("data-key");
    modalQuatidade = 1;

    c(".imgs").src = pizzaJson[key].img;
    c(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
    c(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
    c(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[key].price.toFixed(
      2
    )}`;
    c(".pizzaInfo--size.selected").classList.remove("selected");
    cs(".pizzaInfo--size").forEach((size, indezSize) => {
      if (indezSize == 2) {
        size.classList.add("selected");
      }
      size.querySelector("span").innerHTML = pizzaJson[key].sizes[indezSize];
    });
    c(".pizzaInfo--qt").innerHTML = modalQuatidade;
    c(".pizzaWindowArea").style.opacity = 0;
    c(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      c(".pizzaWindowArea").style.opacity = 1;
    }, 200);
  });

  //inserindo a estrutura clonada no area
  c(".pizza-area").append(pizzaItem);
});

// Eventos do modal

function closeModal() {
  c(".pizzaWindowArea").style.opacity = 0;

  setTimeout(() => {
    c(".pizzaWindowArea").style.display = "none";
  }, 200);
}

cs(".pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton").forEach(
  (item) => {
    item.addEventListener("click", closeModal);
  }
);

c(".pizzaInfo--qtmenos").addEventListener("click", () => {
  if (modalQuatidade > 1) {
    modalQuatidade--;
    c(".pizzaInfo--qt").innerHTML = modalQuatidade;
  }
});

c(".pizzaInfo--qtmais").addEventListener("click", () => {
  modalQuatidade++;
  c(".pizzaInfo--qt").innerHTML = modalQuatidade;
});

cs(".pizzaInfo--size").forEach((size, indezSize) => {
  size.addEventListener('click',(e)=>{
    c('.pizzaInfo--size.selected').classList.remove('selected')
    size.classList.add('selected');
  
  })
});