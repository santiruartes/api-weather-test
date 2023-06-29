// Tenemos que capturar tres elementos: el form (para escuchar el evento submit), 
//el input de busqueda, la lupa (para poder capturar su value, lo que el usuario va a escribir), 
// y el finalmente el section (para poder renderizar el card).

const form = document.getElementById("form");
const cityInput = document.querySelector(".search-input");
const cardContainer = document.querySelector("#card-container");
const card = document.querySelector(".weather-card")


const isEmptyInput = () => {
    return cityInput.value.trim() === "";
}

const isValidCity = (cityData) => {
    return !cityData.location;
}

const getCityData = (cityData) => {
    return {
        cityName: cityData.location.region,
        imageName: cityData.current.condition.icon,
        cityWeatherInfo: cityData.current.condition.text,
        cityTem: Math.round(cityData.current.temp_c),
        cityWind: Math.round(cityData.current.wind_kph),
        cityHumidity: cityData.current.humidity,
        cityWindDir: cityData.current.wind_dir,
    }
}

const createCityTemplate = async (cityData) => {
    const {
        cityName, 
        imageName,
        cityWeatherInfo,
        cityTem,
        cityWindDir,
        cityWind,
        cityHumidity,
    } = await getCityData(cityData);
    return `  
 <div class="weather-card temperature-card">

    <div class="weather-card-info">

      <div class="weather-info">

      <div class="info-img">
        <img class="weather-img" src=${imageName} />
        <h2 class="current-weather">${cityWeatherInfo}</h2>
      </div>
        <h2 class="current-temperature">${cityTem}ºC</h2>

      </div>
    
      
      <div class="info-city-wind">
        <h5 class="min-max-tempperature">${cityHumidity}% HUM </h5>
        <h5 class="wind">${cityWindDir} ${cityWind}KMH</h5>
        <h4 class="weather-city">${cityName}</h4>
      </div>

    </div>
  </div>
    `;
    
}

const changeColorTemp = async (cityData) => {
    const {
      cityTem
    } = await getCityData(cityData)

    const temperatureCard = document.querySelector(".temperature-card");

    if(cityTem > -10 && cityTem <= 0){
      temperatureCard.classList.add("temperature-cold");
      }else if(cityTem > 1 && cityTem <= 15){
        temperatureCard.classList.add("temperature-tempered");
      }else if(cityTem >= 16 && cityTem <= 25){
        temperatureCard.classList.add("temperature-warm");
      }else if(cityTem > 26){
        temperatureCard.classList.add("temperature-hot");
      };
}


const renderCityCard = async (cityData) => {
    cardContainer.innerHTML = await createCityTemplate(cityData) 
    changeColorTemp(cityData);
}

const searchCity = async (e) => {
    e.preventDefault();
    
    //Input no este vacio
    if(isEmptyInput()) {
        //tiramos error
        alert("Por favor, ingrese una ciudad");
        return;
    } 
    
    //Si no esta vacio, realizamos la búsqueda
    const fetchedCity = await requestCity(cityInput.value)
    
    console.log(fetchedCity);
    
    //Que la ciudad no existe, se corta ejecución
    if(isValidCity(fetchedCity)) {
        alert("La ciudad ingresada no existe");
        form.reset();
        return;
    }

    //Si existe la ciudad renderizamos card, 
    // y cambiamos el mensaje predeterminado

    renderCityCard(fetchedCity);
}


const init = () => {
    form.addEventListener("submit", searchCity);
};

init();