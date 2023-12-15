import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TempState = {
	value: number
}

const initialState: TempState = {
	value: 0
}

const tempSlice = createSlice({
	name: 'temp',
	initialState,
	reducers: {
		setTemp: (state, action: PayloadAction<number>) => {
			state.value = action.payload
		}
	}
})

export const { setTemp } = tempSlice.actions
export default tempSlice.reducer