// Tenemos que capturar tres elementos: el form (para escuchar el evento submit), 
//el input de busqueda, la lupa (para poder capturar su value, lo que el usuario va a escribir), 
// y el finalmente el section (para poder renderizar el card).

const form = document.getElementById("form");
const cityInput = document.querySelector(".search-input");
const cardContainet = document.querySelector(".card-container");


const searchCity = async (e) => {
    e.preventDefault();
}


const init = () => {
    form.addEventListener("submit", searchCity);
};

init();