import { configureStore } from "@reduxjs/toolkit"
import cityReducer from "./citySlice"
import choiceReducer from "./choiceSlice"

export const store = configureStore({
	reducer: {
		city: cityReducer,
		choice: choiceReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch