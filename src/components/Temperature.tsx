interface ITempProps {
	temp: number
}

const Temperature: React.FC<ITempProps> = ({temp}) => {


	return (
		<div>
			{temp}
		</div>
	)
}

export default Temperature