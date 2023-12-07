import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

interface IWeatherData {
	name: string
	main: {
		temp: number
	}
}

const App = () => {

	const [weatherData, setWeatherData] = useState<IWeatherData | null>(null)
	const API_KEY: string = 'b44efdc2434e878ce6f880a205003240'
	const [city, setCity] = useState<string>('Moscow')
	const [nextCity, setNextCity] = useState<string>('')

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
				setWeatherData(response.data)
				console.log(response.data)
			} catch (error) {
				console.error(error)
			}
		}
		fetchWeatherData()
	}, [city])

	const chooseCity: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setNextCity(e.target.value)
	}
	const newCity: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()
		setCity(nextCity)
		setNextCity('')
	}

	if (!weatherData) {
		return <div>Loading...</div>
	}

  return (
    <div className="App">
			<h1>Weather today:</h1>
			<p>City: {weatherData.name}</p>
			<p>Temperature: {weatherData.main.temp}</p>
			
			<form onSubmit={newCity}>
				<h2>Choose city:</h2>
				<input value={nextCity} onChange={chooseCity} placeholder='What city are you intrested in?' />
				<button type='submit'>Choose</button>
			</form>
    </div>
  )
}

export default App


// my api key b44efdc2434e878ce6f880a205003240