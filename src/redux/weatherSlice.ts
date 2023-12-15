import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WeatherData } from "../type/types";

const initialState: WeatherData = {
	location: {
		name: 'Moscow',
		country: 'Russia',
		lacaltime: 0,
	},
	current: {
		temp_c: 0,
		condition: {
			text: '',
			icon: ''
		}
	}
}

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		getWeather: (state, action: PayloadAction<WeatherData>) => {
			return action.payload
		}
	}
})

export const { getWeather } = weatherSlice.actions
export default weatherSlice.reducer