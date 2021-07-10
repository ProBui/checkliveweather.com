//Variable
const inputTxt = document.querySelector(".inputTxt");
const button = document.querySelector(".button");
const showdata = document.querySelector(".showdata");
//API key
const API_key = "6c727fe02b78c82752a06438ff65aa43";


// Events
button.addEventListener("click", () => {
    // input variable
   const cityInput = inputTxt.value;
    //console.log(cityinput)
    
    //fetch
    //fetch('http://api.openweathermap.org/data/2.5/weather?q=',$city_input,'&appid=',$API_key)
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_key}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)


            inputTxt.value = " ";
             showdata.innerHTML = `
                                    <ul>
                                        <li class="desc">${data.weather[0].description}</li>
                                        <li class="city">${data.name}</li>
                                        <li class="temp">${data.main.temp}°c</li>
                                    </ul>
                                `; 

            
        })

});
