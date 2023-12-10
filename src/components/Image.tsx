
interface IImgProps {
	icon: string
	text: string
}

const Image: React.FC<IImgProps> = ({icon, text}) => {


	return (
		<div className="image">
			<img className="imageImg" src={icon} alt={text} />
			<p>{text}</p>
		</div>
	)
}

export default Image