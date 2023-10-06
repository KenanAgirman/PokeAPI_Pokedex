let image = document.getElementById("image");
let searchPoke = document.getElementById("searchPoke");
let submitButton = document.getElementById("submitButton");
let errorMessage = document.getElementById("errorMessage");

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
            image.src = reponse.sprites.front_default; 
        } else {
            errorMessage.textContent =("Le pokemon n'existe pas");
        }

    } else {
        errorMessage.textContent =("Le champ ne peut pas être vide.");
    }

}

submitButton.addEventListener("click",TraitemenPoke);
