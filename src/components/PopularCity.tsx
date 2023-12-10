import { CityInfo } from "../type/types"

interface IPopularCityProps {
	city: CityInfo
	setCity: React.Dispatch<React.SetStateAction<string>>
	setChoice: React.Dispatch<React.SetStateAction<boolean>>
}

const PopularCity: React.FC<IPopularCityProps> = ({city, setCity, setChoice}) => {	
	
	const handleClick = () => {
		setCity(city.city)
		setChoice(false)
	}

	return (
		<div onClick={handleClick} className="popularCity">
			{city.city}
		</div>
	)
}

export default PopularCity