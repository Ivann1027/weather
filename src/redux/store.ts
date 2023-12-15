import { configureStore } from "@reduxjs/toolkit"
import cityReducer from "./citySlice"
import choiceReducer from "./choiceSlice"
import weatherReducer from './weatherSlice'
import tempReducer from './tempSlice'

export const store = configureStore({
	reducer: {
		city: cityReducer,
		choice: choiceReducer,
		weather: weatherReducer,
		temp: tempReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch