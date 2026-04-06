import { games } from "./data.js";
import { categories } from "./data.js";

let container=document.getElementById("container")
let element=document.getElementById("element")
let btnAjoutPanier=document.querySelectorAll("#btnAjoutPanier")
document.body.classList.add("bg-[#836FFF]");
let input=document.getElementById("bare");















// l'affiche de barre de recherche




function rechercheBarre(value){
container.innerHTML=""
for (let i = 0; i < games.length; i++) {
if(games[i].title.toLowerCase().includes(value)){
  container.innerHTML+=` <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
    <img 
      src=${games[i].image} 
      alt="image 1" 
      class="w-full h-48 md:h-64 object-cover"
      id="image"
    >
    <div class="p-4">
      <h1 class="font-bold text-lg" id="titre">${games[i].title}</h1>
      <p class="text-gray-600 text-sm" id="Description">${games[i].description}</p>
      <p class="text-gray-600 text-sm" >${games[i].category}</p>
      <p class="text-gray-600 text-sm" >${"$"+games[i].price}</p>

    <button id="btnAjoutPanier" > <img src="add-to-cart.png"
       alt="shopping" width="35" height="35"
       class="rounded-full px-2 py-2 bg-[#15F5BA] hover:bg-white">
      </button>
    </div>
  </div>   
  `}}}
 
input.onkeyup = function(){
  let value = input.value;
  rechercheBarre(value)
}








  //  l'affichage des boutton des categorie



function AfficherBtn(){
  for(let i=0;i<categories.length;i++){
   element.innerHTML+=` <button class="btnCategory py-2 px-4 md:px-7   border border-gray-300 rounded-full bg-[#FFEB00] hover:bg-gray-300 " >${categories[i]}</button>`
  }
   }
  

 

   
 
AfficherBtn()




//  L'affichage des card



  function AfficherCard(){
   container.innerHTML=""
    
games.forEach(jeu =>{
   container.innerHTML+= `   <div class="bg-[#EDF7BD] rounded-xl shadow-md overflow-hidden border border-gray-200 ">
    <img 
      src=${jeu.image} 
      alt="image 1" 
      class="w-full h-48 md:h-64 object-cover"
      id="image"
    >
    <div class="p-4">
      <h1 class="font-bold text-lg" id="titre">${jeu.title}</h1>
      <p class="text-gray-600 text-sm" id="Description">${jeu.description}</p>
      <p class="text-gray-600 text-sm" >${jeu.category}</p>
      <p class="text-gray-600 text-sm" >${"$"+jeu.price}</p>

    <button id="btnAjoutPanier" > <img src="add-to-cart.png"
       alt="shopping" width="35" height="35"
       class="rounded-full px-2 py-2 bg-[#577BC1] hover:bg-white">
       
      </button>
    </div>
  </div> `

 
  

  
})
}
AfficherCard();




// si onclick sur une categories  il afficher le category correspondant
function AccederCategories(){
let btncategory=document.querySelectorAll(".btnCategory")


btncategory.forEach((btn) => {
  btn.addEventListener('click' , () => {
     container.innerHTML=""
    //  console.log(btn.textContent);
    for(let i=0;i<games.length;i++){
    //  console.log(games[i].category +" "+btn.textContent);
        //  console.log();
      if (games[i].category === btn.textContent){ 
        
        container.innerHTML += `
        <div class="bg-[#EDF7BD] rounded-xl shadow-md overflow-hidden border border-gray-200">
          <img 
            src=${games[i].image} 
            alt="image 1" 
            class="w-full h-48 md:h-64 object-cover"
          >
          <div class="p-4">
            <h1 class="font-bold text-lg">${games[i].title}</h1>
            <p class="text-gray-600 text-sm">${games[i].description}</p>
            <p class="text-gray-600 text-sm">${games[i].category}</p>
            <p class="text-gray-600 text-sm">$${games[i].price}</p>

            <button>
              <img src="add-to-cart.png"
                alt="shopping" width="35" height="35"
                class="rounded-full px-2 py-2 bg-[#15F5BA] hover:bg-white">
            </button>
          </div>
        </div>`;
      }
      if(btn.textContent==="All"){
        AfficherCard()
      }
    }
  })
  })
  
}
AccederCategories();





//  recuperer les donnes vers local storage



function ajouteAuPanier() {

  let btnAjoutPanier = document.querySelectorAll("#btnAjoutPanier");

  let panier = JSON.parse(localStorage.getItem("panier")) || [];

  btnAjoutPanier.forEach((btn, index) => {

    btn.addEventListener("click", () => {

     alert("panier ajouter avec success")
      let game = games[index];

      panier.push(game);
      localStorage.setItem("panier", JSON.stringify(panier));

      console.log("ajouté :", game);
    });
  });
}
ajouteAuPanier();



//  la fonction qui permet de  regarder les panier 



function regarderPanier(){
  let btnRegardePanier=document.getElementById("regardePanier");
  btnRegardePanier.addEventListener("click",()=>{
     const panier = JSON.parse(localStorage.getItem("panier")) || [];
    
    // Vider le contenu actuel
   ajouteAuPanier.innerHTML = "";

    // Vérifier si le panier est vide
    if (panier.length === 0) {
     ajouteAuPanier.innerHTML = "<p>Votre panier est vide.</p>";
      return;
    }

    // Afficher chaque élément
    panier.forEach((jeu) => {
     ajouteAuPanier.innerHTML += `
        <div class="panier-item">
          <img src="${jeu.image}" alt="${jeu.titre}" width="50" />
          <p>${jeu.titre} - ${jeu.prix}€</p>
        </div>
      `
    })
    
    
    
    
    
    
  })


}
regarderPanier()





