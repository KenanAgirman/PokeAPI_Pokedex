let recupButon = document.getElementById("button");
let image = document.getElementById("image");


const TraitemenPoke = async () =>{
    console.log("La fonction TraitemenPoke a été appelée.");
    let randomNumber = Math.ceil(Math.random()*251)+1;
    
    let request = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(request);

    console.log(data);

    let reponse = await data.json();

    image.src = reponse.sprites.front_default;
}

recupButon.addEventListener("click",TraitemenPoke);


