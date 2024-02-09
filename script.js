const input = document.getElementById('inp');
const err = document.getElementById('error');
const info = document.getElementById('weatherInfo');
const err2 = document.getElementById('error2');

async function CheckWeather() {
    const apiKey = '82657bfdec836c65c7b5558462146d21'
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=${apiKey}&units=metric`;
    let data = await fetch(Url)
    let result = await data.json();
        console.log(result);
        if (input.value == ""){
            err.style.display = "block"
            err2.style.display = "none"
            info.style.display = "none"
            setTimeout(() => {
                err.style.display = "none"
            }, 4000);
        } else{
            if (result.cod == 404){
                err.style.display = "none"
                err2.style.display = "block"
                input.value = ""
                setTimeout(() => {
                    err2.style.display = "none"
                }, 4000);
            } else{
                info.style.display = "block"
                err.style.display = "none"
                err2.style.display = "none"
                document.getElementById('name').innerHTML = result.name
                document.getElementById('temp').innerHTML = Math.round(result.main.temp) + "℃"
                document.getElementById('humidity').innerHTML = result.main.humidity + "%"
                document.getElementById('wind').innerHTML = result.wind.speed + "km/h"
    
                const icon = result.weather[0].icon
                weatherIcon(icon)
    
                document.getElementById('inp').value = ""
            }
        }
    }

    function weatherIcon(iconCode) {
        const iconElement = document.getElementById('weatherIcon');
        const iconUrl = `https://api.openweathermap.org/img/w/${iconCode}.png`;
        iconElement.src = iconUrl
    }

    