


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '005ba17ed0mshdd40fd048a45777p1bf038jsn4ad0d0b66a84',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

let searchBtn = document.querySelector(".right button");
searchBtn.addEventListener("click",()=>{
    let city = document.querySelector("#search").value;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then(response => {
        if(response.temp !=undefined){
            renderData(response,city)
        }else{
            alert("Please fill correct city or spelling")
        }
    })
    .catch(err => console.error(err));
    
})



    

let cont = document.querySelector("#container");

function cards(data,city) {
    return `
    <div>
    <h1>Weather for ${city}</h1>
    </div>
    <div id="content">
        <div class="temp">
            <div>
                <h3>Temperature info</h3>
            </div>
            <div id="temp">
                <p>${data.temp}</p>
                <p>Temperature is : ${data.temp}</p>
                <p>Min Temperature. is : ${data.min_temp}</p>
                <p>Max Temperature. is : ${data.max_temp}</p>
            </div>
        </div>
        <div class="humidity">
            <div>
                <h3>Humidity info</h3>                    
            </div>
            <div id="humi">
                <p>${data.humidity}</p>
                <p>Humidity is : ${data.humidity}</p>
                <p>feels like : ${data.feels_like}</p>
            </div>
        </div>
        <div class="wind">
            <div>
                <h3>Wind & Sun</h3>                   
            </div>
            <div id="wind">
                <p>${data.wind_speed}</p>
                <p>wind Speed is : ${data.wind_speed}</p>
                <p>wind degree is : ${data.wind_degrees}</p>
                <p>Sunrise Time is : ${data.sunrise}</p>
                <p>Sunset Time is : ${data.sunset}</p>
            </div>
        </div>
    </div>    
    
    
    `
}

function renderData(data,city){
    cont.innerHTML = cards(data,city);
}
