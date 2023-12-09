
interface IImgProps {
	icon: string
	text: string
}

const Image: React.FC<IImgProps> = ({icon, text}) => {


	return (
		<div>
			<img src={icon} alt={text} />
			<p>{text}</p>
		</div>
	)
}

export default Image