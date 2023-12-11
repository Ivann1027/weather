import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

interface IChoiceState {
	value: boolean
}
const initialState: IChoiceState = {
	value: false
}

const choiceSlice = createSlice({
	name: "choice",
	initialState,
	reducers: {
		active: (state) => {
			state.value = !state.value
		}
	}
})

export const { active } = choiceSlice.actions
export const choice = (state: RootState) => state.choice.value
export default choiceSlice.reducer