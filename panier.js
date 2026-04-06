







import { games } from "./data.js";

let cart = JSON.parse(localStorage.getItem('games')) || [];
let totale=0;

function afficherPagePanier() {
  const gameCards = document.getElementById('Container');

  gameCards.innerHTML = ""; // vider avant

  games.forEach(game => {
    gameCards.innerHTML += `
      <div class="bg-[#EDF7BD] rounded-xl p-4
                  flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">

        <div class="flex items-center gap-4 w-full">
          <img src="${game.image}"
               class="w-16 h-16 rounded-lg">

          <div class="flex-1">
            <h2 class="font-semibold">${game.title}</h2>
            <p class="text-sm text-gray-500">${game.description}/hr</p>
            <p class="text-blue-600 font-bold">${'$'+game.price}</p>
          </div>
        </div>

     



     
  <div class="...">

    <!-- infos du jeu -->

    <div class="flex items-center gap-3 mt-2">
      <button id='minus'>-</button>
      <input type="number" value="1" min="1" id='qnt'>
      <button id='plus'>+</button>
      <button id='delet'>✕</button>
    </div>
    <span class="text-black" id='prix'>$59,00</span>

  </div>



   <div class="mt-6">
      <div class="flex justify-between text-lg mb-4">
        <span class="text-black" >Total</span>
        <span class="text-black" id='prix-total'>$59,00</span>
      </div>

      <button class="w-full bg-green-400 rounded-full py-3 text-lg" id='commande'>
        Commander
      </button>
    </div>






`;
  
 
 






const plus = document.querySelector("#plus");
const mainus = document.querySelector("#minus");
const efface = document.querySelector("#delet");
const quantity = document.querySelector("#qnt");
const prixElement = document.querySelector("#price");
const prixTotal = document.getElementById("#prix-total");
const commande= document.getElementById("#commande");


totale += game.price;
plus.addEventListener('click', () => {

    let quantite = Number(quantity.textContent);

    quantite++;
    quantity.textContent = quantite;

    prixElement.textContent = game.price * quantite + "$ ";

    totale += game.price;
    prixTotal.textContent = totale + " $";
});
mainus.addEventListener('click',()=>{

let quantite=Number(quantity.textContent);

 if (quantite > 1) {
           quantite--;
           quantity.textContent=quantite;

    prixElement.textContent=game.price* quantite+ "DH";        
        
  totale -= game.price;
        prixTotal.textContent = totale + " DH";
}


});
efface.addEventListener('click',()=>{

 let quantite = Number(quantity.textContent);
        totale-= game.price * quantite;
        prixTotal.textContent = totale + " DH";
        div.remove(); 


});


  


prixTotal.textContent=`${totale} DH`;



function totalPanier(){

let total =0;
const toutlesDiv=contenue.querySelectorAll('.cart-item');

toutlesDiv.forEach(div=>{
const prix=Number(div.querySelector('.price').dataset.price);
const qntit=Number(div.querySelector('.qnt').textContent);
total+=prix*qntit;



}); prixTotal.textContent=total+"DH";

}

commande.addEventListener('click',()=>{

  localStorage.removeItem('cart');
contenue.innerHTML="";

prixTotal.textContent="0 DH";

alert("La commande est bien passÃ©e!")

commande.textContent="Y a pas de commande";
 });})



};


afficherPagePanier();
