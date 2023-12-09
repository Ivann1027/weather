import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import CurrentDate from './components/CurrentDate'
import Time from './components/Time'
import City from './components/City'
import Image from './components/Image'
import Temperature from './components/Temperature'

interface IWeatherData {
	location: {
		name: string
		country: string
	}
	current: {
		temp_c: number
		condition: {
			text: string
			icon: string
		}
	}
}

const App: React.FC = () => {

	const [weatherData, setWeatherData] = useState<IWeatherData | null>(null)
	const API_KEY: string = 'f04d71edde014f7d869110721230912'
	const city: string = 'Moscow'
	

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
				console.log(response.data)
				setWeatherData(response.data)
			} catch (error) {
				console.error(error)
			}
		}
		fetchWeatherData()
	}, [])

	if (!weatherData) {
		return <div>Loading...</div>
	}

  return (
		<div className="App">
			<CurrentDate />
			<Time />
			<City city={weatherData.location.name} country={weatherData.location.country} />
			<Image icon={weatherData.current.condition.icon} text={weatherData.current.condition.text} />
			<Temperature temp={weatherData.current.temp_c} />
    </div>
  )
}

export default App


// my api key b44efdc2434e878ce6f880a205003240
// my new api key 52f057bb2deb767a599c199efed6bc6f

// my key from weatherAPI f04d71edde014f7d869110721230912