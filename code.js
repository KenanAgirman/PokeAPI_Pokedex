let image = document.getElementById("image");
let searchPoke = document.getElementById("searchPoke");
let submitButton = document.getElementById("submitButton");

const TraitemenPoke = async () =>{
    console.log("La fonction TraitemenPoke a été appelée.");
    var pokemon = searchPoke.value;

    console.log(pokemon);
    
    let request = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    let data = await fetch(request);

    console.log(data);

    let reponse = await data.json();

    image.src = reponse.sprites.front_default;
}

submitButton.addEventListener("click",TraitemenPoke);
