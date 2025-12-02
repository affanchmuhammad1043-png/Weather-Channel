API_KEY = "e9100ebe25334d6589975320250212"
const BASE_URL = "https://api.weatherapi.com/v1/current.json"

const searchButton=document.getElementById("search-button")
const searchBox=document.getElementById("search-box")
const cityname=document.getElementById("city")
const date=document.getElementById("date")
const temp=document.getElementById("temp")
const humidity=document.getElementById("humidity")
const windspeed=document.getElementById("wind")
const icons=document.getElementById("weather-icon")

async function getWeather(city) {
    try {
        
        const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}`);
        const data = await response.json()

        if (!data.error) {
        
            cityname.textContent = data.location.name
            date.textContent = data.location.localtime.split(" ")[0]
            temp.textContent = `${data.current.temp_c}°C`
            humidity.textContent = `${data.current.humidity}%`
            windspeed.textContent = `${data.current.wind_kph} km/h`
            
            const condition=data.current.condition.text.toLowerCase()

            if(condition.includes("cloud")){
                icons.className='wi wi-cloud'
            }
             else if (condition.includes('rain') || condition.includes('drizzle')) {
                icons.className = 'wi wi-rain'
            } 
            else if (condition.includes('snow')) {
                icons.className = 'wi wi-snow'
            } 
            else if (condition.includes('sunny') || condition.includes('clear')) {
                icons.className = 'wi wi-day-sunny'
            }
             else if (condition.includes('storm') || condition.includes('thunder')) {
                icons.className = 'wi wi-thunderstorm'
            } 
            else {
                icons.className = 'wi wi-day-cloudy'
            }
        } else {
            alert('City not found!')
        }}
        catch(error){
            console.log("Error fetching data",error)

        }
    }

    searchButton.addEventListener("click" ,(evt) => { 

        evt.preventDefault()
        const city=searchBox.value.trim()

        if (city){
            getWeather(city)
        }
    })
   





