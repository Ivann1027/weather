import { useEffect, useState } from 'react'
import axios from 'axios'
import ChooseCity from './components/ChooseCity'
import CurrentDate from './components/CurrentDate'
import Time from './components/Time'
import City from './components/City'
import Image from './components/Image'
import Temperature from './components/Temperature'
import { WeatherData } from './type/types'

const App = () => {

	const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
	const API_KEY: string = 'f04d71edde014f7d869110721230912'
	const [city, setCity] = useState<string>('Madrid')
	const [choice, setChoice] = useState<boolean>(true)
	

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
				console.log(response.data)
				setWeatherData(response.data)
			} catch (error) {
				console.log('У вас ошибка', error)
			} 
		}
		fetchWeatherData()
	}, [city])

	if (!weatherData) {
		return <div>Loading...</div>
	}

  return (
		<div className="App">
			<ChooseCity choice={choice} setChoice={setChoice} setCity={setCity} />
			<CurrentDate />
			<Time />
			<City setChoice={setChoice} city={weatherData.location.name} country={weatherData.location.country} />
			<Image icon={weatherData.current.condition.icon} text={weatherData.current.condition.text} />
			<Temperature temp={weatherData.current.temp_c} />
    </div>
  )
}

export default App

// my key from weatherAPI f04d71edde014f7d869110721230912