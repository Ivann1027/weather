import { gettingTime } from "../data/currentDate"

const Time = () => {

	const currentTime: string = gettingTime()

	return (
		<div>
			{currentTime}
		</div>
	)
}

export default Time