
//Guardamos data que no va a ser modificada por lo que va en mayúsculas
const BASE_URL = "http://api.weatherapi.com/v1/"

const key = "2f764c05b70b4deaa36203619231906"

// Creamos una función que haga el fetch, realizamos la inserción de query parameters
const requestCity = async (city) => { 
    try {
        const response = await fetch(`${BASE_URL}current.json?key=${key}&q=${city}&aqi=no&lang=es`)

        const data = await response.json();
        return data;
    } catch(error) {

        console.log(error);

        cardContainer.innerHTML = `<h2>Rompimos todo, el error fue el siguiente: ${error}</h2>`
    }

};

// Refactorizar y probar un try/catch para el manejar el error