import { gettingDate } from "../data/currentDate"

const CurrentDate = () => {

	const currentDate: string = gettingDate()

	return (
		<div className="currentDate">
			{currentDate}
		</div>
	)
}

export default CurrentDate