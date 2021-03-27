let container = document.getElementById('container');
let num = 5;

var request = new XMLHttpRequest();
request.open('GET', `https://tw.portal-pokemon.com/play/pokedex/001`, true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {

    console.log(request.responseText);
  }
};
request.send();

window.onload = setPokemon();

function setPokemon(){
    document.getElementsByTagName("h1")[0].innerHTML="Pokemon Album";
}

function fetchPokemon() {
let pokemons = "";
for(let i=1;i<899;i++){
    let fileName = i.toString().padStart(3, '0');
    let pokemonImg = `<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${fileName}.png" >`;
    pokemons += pokemonImg;    
}
container.innerHTML = pokemons;
}

let btn = document.getElementById("btn");
btn.onclick = fetchPokemon;

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", fetchPokemon);

function fetchPokemon_clear(){
container.innerHTML = "";
}