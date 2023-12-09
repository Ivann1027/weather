import { gettingDate } from "../data/currentDate"

const CurrentDate = () => {

	const currentDate: string = gettingDate()

	return (
		<div>
			{currentDate}
		</div>
	)
}

export default CurrentDate