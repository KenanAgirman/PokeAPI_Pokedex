let image = document.getElementById("image");
let imageShiny = document.getElementById("imageShiny");
let searchPoke = document.getElementById("searchPoke");
let submitButton = document.getElementById("submitButton");
let errorMessage = document.getElementById("errorMessage");
let types = document.getElementById("types");

const TraitemenPoke = async () =>{
    console.log("La fonction TraitemenPoke a été appelée.");
    var pokemon = searchPoke.value.trim();
    
    if(pokemon !== "")
    {
        console.log(pokemon);
        
        let request = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    
        let data = await fetch(request);
    
        console.log(data);
    
        if(data.ok)
        {
            let reponse = await data.json();
            imageShiny.src = reponse.sprites.front_shiny; 
            image.src = reponse.sprites.front_default;
            types.types = reponse.types.name;

            console.log(reponse.types.name);

            errorMessage.textContent = " ";
        } else{
            errorMessage.textContent =("Le pokemon n'existe pas");
        }

    } else {
        errorMessage.textContent =("Le champ ne peut pas être vide.");
    }

}

submitButton.addEventListener("click",TraitemenPoke);
