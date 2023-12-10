

interface ICityProps {
	setChoice: React.Dispatch<React.SetStateAction<boolean>>
	city: string
	country: string
}

const City: React.FC<ICityProps> = ({setChoice, city, country}) => {


	return (
		<div onClick={() => setChoice(true)} className="city">
			{city}, {country}
		</div>
	)
}

export default City