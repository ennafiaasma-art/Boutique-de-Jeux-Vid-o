export function countGames(games){
    let paragraphe=Document.creatElement("p")
      let panier = JSON.parse(localStorage.getItem("panier")) || [];
paragraphe.textContent=panier


}