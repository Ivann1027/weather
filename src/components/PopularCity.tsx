import { CityInfo } from "../type/types"
import { useAppDispatch } from "../redux/hooks"
import { active } from "../redux/choiceSlice"
import { change } from "../redux/citySlice"

interface IPopularCityProps {
	city: CityInfo
}

const PopularCity: React.FC<IPopularCityProps> = ({ city }) => {	

	const dispatch = useAppDispatch()
	
	const handleClick = () => {
		dispatch(change(city.city))
		dispatch(active())
	}

	return (
		<div onClick={handleClick} className="popularCity">
			{city.city}
		</div>
	)
}

export default PopularCity