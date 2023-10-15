const API_KEY="70fa06275dacbb4b53039b7c28a621e0";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const response= await fetch(url+ city+ `&appid=${API_KEY}`);
    const data= await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp);
    document.querySelector(".humidity").innerHTML=data.main.humidity;
    document.querySelector(".wind").innerHTML=data.wind.speed;

    switch(data.weather[0].main){
        case "Clouds":
            weatherIcon.src = "images/cloudy-day.png"; break;
        case "Clear":
            weatherIcon.src = "images/sun.png"; break;
        case "Thunderstorm":
            weatherIcon.src = "images/storm.png"; break;
        case "Drizzle":
            weatherIcon.src= "images/rainy.png"; break;
        case "Mist":
            weatherIcon.src= "images/fog.png"; break;
        case "Rain":
            weatherIcon.src= "images/rain.png"; break;
        default:
            weatherIcon.src= "images/sun.png"; break;
    }    
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
