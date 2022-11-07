import display from "./display";
const getData = (city) =>{
    const userCityInput = document.querySelector(".userEntry");

    async function getCurrentWeather() {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=ea037298d7daabadeddd3dbf5f8ffd97&units=imperial', {mode: 'cors'});
        if (response.status !== 200) {
            handleError();
        } else {
            const weather = await response.json();
        display(weather);
        }
        
        
      }
      getCurrentWeather();
      
    function handleError(){
        userCityInput.value ="";
        userCityInput.setAttribute("placeholder", "Please enter an actual city.....");
    }
};

export default getData;