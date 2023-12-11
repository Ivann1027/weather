import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

interface ICityState {
	value: string
}
const initialState: ICityState = {
	value: 'Moscow',
}

export const citySlice = createSlice({
	name: 'city',
	initialState,
	reducers: {
		change: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		}
	}
})

export const { change } = citySlice.actions
export const city = (state: RootState) => state.city.value
export default citySlice.reducer