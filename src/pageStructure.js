const page = () =>{
    const body = document.body;
    
    const header = document.createElement("header");
    
    const userCityInput = document.createElement("input");
    userCityInput.classList.add("userEntry")
    userCityInput.setAttribute("type", "text");
    
    userCityInput.setAttribute("placeholder", "Enter City Here");
    
    const submit = document.createElement("button");
    submit.classList.add("search")
    submit.setAttribute("placeholder", "Enter City Here");
    submit.textContent= "Search";
    
    header.appendChild(userCityInput);
    header.appendChild(submit);

    const currentweather = document.createElement("div");
    currentweather.classList.add("currentweater");

    const cityName = document.createElement("h1");
    cityName.classList.add("cityName");


    const tempDiv = document.createElement("div");
    tempDiv.classList.add("tempDiv");


    const temperature = document.createElement("h2");
    temperature.classList.add("temperature");

    const weatherImage = document.createElement("img");
    weatherImage.classList.add("weatherImage");

    tempDiv.appendChild(temperature);
    tempDiv.appendChild(weatherImage);

    const moreInfo = document.createElement("div");
    moreInfo.classList.add("moreInfo");

    const feelsLike = document.createElement("div");
    feelsLike.classList.add("feelsLike");

    const description = document.createElement("div");
    description.classList.add("description"); 

    const sunrise = document.createElement("div");
    sunrise.classList.add("sunrise");
    const sunset = document.createElement("div");
    sunset.classList.add("sunset");

    moreInfo.appendChild(feelsLike);
    moreInfo.appendChild(description);
    moreInfo.appendChild(sunrise);
    moreInfo.appendChild(sunset);
    
    currentweather.appendChild(cityName);
    currentweather.appendChild(tempDiv);
    currentweather.appendChild(moreInfo);




    body.appendChild(header);
    body.appendChild(currentweather);
    

    
    
    
    };
    export default page;