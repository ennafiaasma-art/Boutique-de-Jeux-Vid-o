import { games } from "./data.js";

const gameCards = document.getElementById('Container');
let cart = JSON.parse(localStorage.getItem('games')) || [];

function afficherPagePanier() {
  gameCards.innerHTML = ""; // vider avant

  games.forEach(game => {
    gameCards.innerHTML += `
      <div class="card relative bg-[#EDF7BD] rounded-xl p-4 flex flex-col md:flex-col gap-4 shadow-md h-full">

        <!-- routeur -->
        <a href="index.html" 
           class="absolute top-[10px] left-[10px] text-blue-600 text-lg font-bold">
           routeur
        </a>

        <!-- Content -->
        <div class="flex flex-col gap-4 mt-6">

          <div class="flex items-center gap-4 w-full">
            <img src="${game.image}"
                 class="w-16 h-16 rounded-lg">

            <div class="flex-1">
              <h2 class="font-semibold">${game.title}</h2>
              <p class="text-sm text-gray-500">${game.description}/hr</p>
              <p class="price text-blue-600 font-bold">${'$' + game.price}</p>
            </div>
          </div>

          <!-- Controls -->
          <div class="flex items-center justify-center gap-3 mt-9">
            <span class="moins w-16 text-2xl cursor-pointer">-</span>
            <span class="qnt w-16 text-2xl">1</span>
            <span class="plus w-16 text-2xl cursor-pointer">+</span>

            <button class="delete bg-red-500 text-white px-3 py-1 rounded">
              x
            </button>
          </div>

          <div class="flex justify-between">
            <span>Total</span>
            <span class="total">$ ${game.price}</span>
          </div>

        </div>

        <!-- Button Commander -->
        <div class="w-full md:w-full md:mt-auto">
          <button class="commander w-full bg-green-400 rounded-full py-3 text-lg">
            Commander
          </button>
        </div>

      </div>
    `;
  });

  // Gestion des boutons
  gameCards.addEventListener("click", function(e) {
    const card = e.target.closest(".card");
    if (!card) return;

    // + / - pour quantité
    if (e.target.classList.contains("plus") || e.target.classList.contains("moins")) {
      const qnt = card.querySelector(".qnt");
      const total = card.querySelector(".total");
      const price = parseFloat(card.querySelector(".price").textContent.replace('$',''));
      let quantity = parseInt(qnt.textContent);

      quantity += e.target.classList.contains("plus") ? 1 : (quantity > 1 ? -1 : 0);

      qnt.textContent = quantity;
      total.textContent = `$ ${quantity * price}`;
    }

    // Supprimer la carte
    if (e.target.classList.contains("delete")) {
      card.remove();
    }

    // Commander
    if (e.target.classList.contains("commander")) {
      alert("Merci pour votre commande !");
    }
  });
}

afficherPagePanier();