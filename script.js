const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bihar';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf04af4dcamsh4f7b7dbb042fd78p12c310jsn83cb67af7e5b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather =(city)=>{
	cityName.innerHTML=city
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`
	fetch(url, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		windspeed2.innerHTML = response.wind_speed
	})
	.catch(err => console.log(err))}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

