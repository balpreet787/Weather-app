import getData from "./getData";
import brokenClouds from "./broken-clouds.jpeg";
import cloudy from "./cloudy.jpeg";
import misty from "./misty.jpeg";
import rainy from "./rainy.jpeg";
import snow from "./snowy.jpeg";
import sunny from "./sunny.jpeg";
import thunderstorm from "./thunderstorm.jpeg";


const display = (weatherData) =>{
    const body = document.body;
    const search = document.querySelector(".search");
    const userCityInput = document.querySelector(".userEntry");
    const cityName = document.querySelector(".cityName");
    const temperature = document.querySelector(".temperature");
    const feelsLike = document.querySelector(".feelsLike");
    const description = document.querySelector(".description");
    const sunrise = document.querySelector(".sunrise");
    const sunset = document.querySelector(".sunset");
    const weatherImage = document.querySelector(".weatherImage");

      
        search.addEventListener('click',()=>{
        if ((userCityInput.value).length > 0){
                getData(userCityInput.value);
                userCityInput.value = "";
        }
        });
    
    const data = weatherData;
    console.log(data);
    cityName.textContent = data.name +", "+ data.sys.country;
    temperature.textContent = data.main.temp;
    weatherImage.src =  "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"
    feelsLike.textContent = "feels like: "+data.main.feels_like;
    description.textContent = data.weather[0].description;
    sunrise.textContent = "Sunrise: "+(new Date(data.sys.sunrise*1000)).toLocaleTimeString();
    sunset.textContent = "Sunset: " +(new Date(data.sys.sunset*1000)).toLocaleTimeString();

    if(data.weather[0].description ==="clear sky"){
        body.style.background = 'url('+sunny+')';
    }
    else if(data.weather[0].description ==="few clouds"){
        body.style.background = 'url('+cloudy+')';
    }
    else if(data.weather[0].description ==="scattered clouds"){
        body.style.background = 'url('+brokenClouds+')';
    }
    else if(data.weather[0].description ==="broken clouds"){
        body.style.background = 'url('+brokenClouds+')';
    }
    else if(data.weather[0].description ==="shower rain"){
        body.style.background = 'url('+rainy+')';
    }
    else if(data.weather[0].description ==="rain"){
        body.style.background = 'url('+rainy+')';
    }
    else if(data.weather[0].description ==="thunderstorm"){
        body.style.background = 'url('+thunderstorm+')';
    }
    else if(data.weather[0].description ==="snow"){
        body.style.background = 'url('+snow+')';
    }
    else if(data.weather[0].description ==="mist"){
        body.style.background = 'url('+misty+')';
    }
    else{
        body.style.background = 'url('+sunny+')';
    }
    

    

};
export default display;