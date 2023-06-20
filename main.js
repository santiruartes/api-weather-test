// Tenemos que capturar tres elementos: el form (para escuchar el evento submit), 
//el input de busqueda, la lupa (para poder capturar su value, lo que el usuario va a escribir), 
// y el finalmente el section (para poder renderizar el card).

const form = document.getElementById("form");
const cityInput = document.querySelector(".search-input");
const cardContainet = document.querySelector(".card-container");

const isEmptyInput = () => {
    return cityInput.value.trim() === "";
}

const isValidCity = (cityData) => {
    return !cityData.tz_id;
}

const searchCity = async (e) => {
    e.preventDefault();
    
    //Input no este vacio
    if(isEmptyInput()) {
        //tiramos error
        alert("Por favor, ingrese una ciudad");
        cityInput.reset();
        return;
    } 

    //Si no esta vacio, realizamos la búsqueda
    const fetchedCity = await requestCity(cityInput.value)

    console.log(fetchedCity);
    //Que la ciudad no existe, se corta ejecución
    if(isValidCity(fetchedCity)) {
        alert("La ciudad ingresada no existe");
        return;
    }

    //Si existe la ciudad renderizamos card, 
    // y cambiamos el mensaje predeterminado
}


const init = () => {
    form.addEventListener("submit", searchCity);
};

init();