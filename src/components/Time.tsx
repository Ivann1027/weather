import { gettingTime } from "../data/currentDate"

const Time = () => {

	const currentTime: string = gettingTime()

	return (
		<div className="time">
			{currentTime}
		</div>
	)
}

export default Time

// Реализовать обновление времени на странице