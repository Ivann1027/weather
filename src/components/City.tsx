import { useAppDispatch } from "../redux/hooks"
import { active } from "../redux/choiceSlice"

interface ICityProps {
	city: string
	country: string
}

const City: React.FC<ICityProps> = ({ city, country}) => {

	const dispatch = useAppDispatch()

	return (
		<div onClick={() => dispatch(active())} className="city">
			{city}, {country}
		</div>
	)
}

export default City