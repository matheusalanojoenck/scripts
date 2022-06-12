//https://steamcommunity.com/id/YOUR_ID/games/?tab=all&sort=name
var games = document.getElementById("games_list_rows").querySelectorAll(".gameListRowItemName")
for(const game of games){
  console.log(game.innerText)
}
