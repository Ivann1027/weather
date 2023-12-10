interface ITempProps {
	temp: number
}

const Temperature: React.FC<ITempProps> = ({temp}) => {


	return (
		<div className="temperature">
			{temp}
		</div>
	)
}

export default Temperature