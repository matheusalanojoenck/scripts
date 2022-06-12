//https://www.epicgames.com/account/transactions?lang=pt-BR&productName=epicgames
var games = document.getElementsByClassName("payment-history-table")[0].children
 for(i = 2; i < games.length; i++){
 console.log(games[i].getElementsByClassName("expand-btn")[0].firstElementChild.children[0].innerText)
}
