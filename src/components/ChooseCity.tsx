import { useState } from "react"
import { popularCities } from "../data/popularCities"
import PopularCity from "./PopularCity"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { active } from "../redux/choiceSlice"
import { change } from "../redux/citySlice"

const ChooseCity = () => {

	const [desiredCity, setDesiredCity] = useState<string>('')
	const dispatch = useAppDispatch()
	const choice = useAppSelector(state => state.choice.value)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDesiredCity(event.target.value)
	}
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		dispatch(change(desiredCity))
		setDesiredCity('')
		dispatch(active())
	}

	return (
		<div style={{display: choice ? 'block' : 'none'}} className="chooseCity">
			<form onSubmit={handleSubmit}>
				<input value={desiredCity} onChange={handleChange} placeholder="Enter some city..." />
				<button type='submit'>Search</button>
			</form>
			<div>
				{popularCities.map(city => (
					<PopularCity city={city} key={city.id} />
				))}
			</div>
		</div>
	)
}

export default ChooseCity