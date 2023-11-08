const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")
const apiKey="Gudota8H1udGkLwVp3idjQ==dlPElGtlonCOWgft";

function joke()  {
    console.log("clicked");
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const options = {
    method:"GET",
    headers:{
        "X-Api-Key": apiKey,
    },
}

async function getJoke(){

    try {
    jokeEl.innerText="Updating...";
    btnEl.disabled=true;
    btnEl.innerText="Loading...";
    const responde = await fetch(apiURL, options);
    const data = await responde.json();
    
    btnEl.disabled=false;
    btnEl.innerText="Tell me a joke..."

    jokeEl.innerText= data[0].joke;
    }  catch(error){

    jokeEl.innerText= "An error happeding, try again";
    console.log(error)

    }

}


btnEl.addEventListener("click", getJoke);