import { useEffect, useState } from 'react'
import axios from 'axios'
import ChooseCity from './components/ChooseCity'
import CurrentDate from './components/CurrentDate'
import Time from './components/Time'
import City from './components/City'
import Image from './components/Image'
import Temperature from './components/Temperature'
import { WeatherData, Theme } from './type/types'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { fetchWeather } from './hooks/fetchWeather'

const App = () => {

	const temp = useAppSelector(state => state.temp.value)
	const weather: WeatherData = useAppSelector(state => state.weather) 
	const dispatch = useAppDispatch()
	const city = useAppSelector(state => state.city.value)
	let theme: Theme = Theme.BLUE

	useEffect(() => {
		dispatch(fetchWeather(city))
	}, [city])

	if (temp) {
		if (temp >= 24) {
			theme = Theme.ORANGE
		} else if (temp < 5) {
			theme = Theme.DARK
		} else {
			theme = Theme.BLUE
		}
	}

	if (!weather) {
		return <div>Loading...</div>
	}

  return (
		<div style={{background: theme}} className="App">
			<ChooseCity />
			<CurrentDate />
			<Time />
			<City city={weather.location.name} country={weather.location.country} />
			<Image icon={weather.current.condition.icon} text={weather.current.condition.text} />
			<Temperature temp={weather.current.temp_c} />
    </div>
  )
}

export default App

// my key from weatherAPI f04d71edde014f7d869110721230912