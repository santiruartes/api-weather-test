const key = "44e971c979e03dbe0dc20f7d84737226";


//Guardamos data que no va a ser modificada por lo que va en mayúsculas
const BASE_URL = "https://api.openweathermap.org/data/3.0/"

// Creamos una función que haga el fetch, realizamos la inserción de query parameters
const requestCity = async (city) => {
    const response = await fetch(`${BASE_URL}weather?=q${city}&=units=metric&lang=es&appid=${key}`)

    const data = await response.json();
    return data;
};

