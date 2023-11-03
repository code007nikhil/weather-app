var search = document.querySelector(".search");
var searchbtn = document.querySelector(".searchbtn");

const apikey = "&appid=24ce3e04c5f89459579725b1897062fa";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var apicall = async function(searched){

    const response = await fetch(url + searched + apikey );
    var error = document.querySelector(".error");
    if(response.status == 404){
        error.style.display = "block";
    }
    else{
        const data = await response.json()



    var city = document.querySelector(".weather-city");
    var temp = document.querySelector(".weather-temp");
    var about = document.querySelector(".weather-about");
    var humidity = document.querySelector(".humidity");
    var wind = document.querySelector(".wind");

    about.textContent = data.weather[0].main;
    temp.textContent = Math.round(data.main.temp) + " °C";
    city.textContent = data.name;
    humidity.textContent = data.main.humidity + " %"
    wind.textContent = Math.round(data.wind.speed) + " Km/Hr"

    var weatherImg = document.querySelector(".weather-img");
    if(data.weather[0].main == "Clear"){
        weatherImg.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Clouds"){
        weatherImg.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherImg.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherImg.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherImg.src = "images/snow.png"
    }

    var weatherdets = document.querySelector(".weather");
    weatherdets.style.display = "block";
    error.style.display = "none";

    }

    
    
}

searchbtn.addEventListener("click",()=>{
    apicall(search.value);
})
