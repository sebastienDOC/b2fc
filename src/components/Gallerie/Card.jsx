import ModalImage from "react-modal-image"

function Card({ image, titre }) {
	
	return (
		<div className='card'>
			<ModalImage
				small={image}
                large={image}
                alt={image}
                />
			<p>{titre}</p>
		</div>
	)
}

export default Card