

const container = document.getElementById("Container");

function afficherPanier() {
  container.innerHTML = "";

  let panier = JSON.parse(localStorage.getItem("panier")) || [];

  panier.forEach((game) => {

    const card = document.createElement("div");
    card.className = "card bg-[#EDF7BD] p-4 rounded-xl mb-4";

    card.setAttribute("data-id", game.id);

    card.innerHTML = `
      <a href="index.html" class="text-blue-600 font-bold">GO HOME</a>

      <div class="flex gap-4 mt-4">
        <img src="${game.image}" class="w-16 h-16 rounded">
        
        <div>
          <h2>${game.title}</h2>
          <p>${game.description}</p>
          <p class="price text-blue-600">${game.price}</p>
        </div>
      </div>

      <div class="flex gap-3 mt-4">
        <button class="moins">-</button>
        <span class="qnt">1</span>
        <button class="plus">+</button>
        <button class="delete text-red-500">x</button>
      </div>

      <p class="total mt-2">Total: $${game.price}</p>

      <button class="commander bg-green-400 w-full mt-3 p-2 rounded">
        Commander
      </button>
    `;

    container.appendChild(card);
  });
}


container.addEventListener("click", (e) => {

  const card = e.target.closest(".card");
  if (!card) return;



  const qnt = card.querySelector(".qnt");
  const price = Number(card.querySelector(".price").textContent);
  const total = card.querySelector(".total");

  let quantity = Number(qnt.textContent);


  if (e.target.classList.contains("plus")) {
    quantity++;
  }


  if (e.target.classList.contains("moins") && quantity > 1) {
    quantity--;
  }

  // update
  qnt.textContent = quantity;
  total.textContent = "Total: $" + (quantity * price);

 
  if (e.target.classList.contains("delete")) {

    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    const id = card.getAttribute("data-id");

   
    panier = panier.filter(game => game.id != id);

    localStorage.setItem("panier", JSON.stringify(panier));

    card.remove();
  }

  // commander
  if (e.target.classList.contains("commander")) {
    alert("Commande validée !");
  }

});

afficherPanier();