import { useState } from "react"
import { popularCities } from "../data/popularCities"
import PopularCity from "./PopularCity"

interface IChooseCityProps {
	choice: boolean
	setChoice: React.Dispatch<React.SetStateAction<boolean>>
	setCity: React.Dispatch<React.SetStateAction<string>>
}

const ChooseCity: React.FC<IChooseCityProps> = ({choice, setChoice, setCity}) => {

	const [desiredCity, setDesiredCity] = useState<string>('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDesiredCity(event.target.value)
	}
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setCity(desiredCity)
		setDesiredCity('')
		setChoice(false)
	}

	return (
		<div style={{display: choice ? 'block' : 'none'}} className="chooseCity">
			<form onSubmit={handleSubmit}>
				<input value={desiredCity} onChange={handleChange} placeholder="Enter some city..." />
				<button type='submit'>Search</button>
			</form>
			<div>
				{popularCities.map(city => (
					<PopularCity city={city} setCity={setCity} setChoice={setChoice} key={city.id} />
				))}
			</div>
		</div>
	)
}

export default ChooseCity