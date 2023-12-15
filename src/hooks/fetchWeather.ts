import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import { getWeather } from "../redux/weatherSlice"
import { setTemp } from "../redux/tempSlice"


export const fetchWeather = (city: string) => {

	const API_KEY: string = 'f04d71edde014f7d869110721230912'

	return async (dispatch: Dispatch) => {
		try {
			const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
			dispatch(getWeather(response.data))
			dispatch(setTemp(response.data.current.temp_c))
		} catch (e) {
			console.log("Error: weather not found")
		}
	}
}