

interface ICityProps {
	city: string
	country: string
}

const City: React.FC<ICityProps> = ({city, country}) => {


	return (
		<div>
			{city}, {country}
		</div>
	)
}

export default City