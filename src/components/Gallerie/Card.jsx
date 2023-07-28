function Card({ id, image, titre }) {
	
	return (
		<div id={id} className='card'>
			<img src={image} alt={image} />
			<p>{titre}</p>
			<div className="gradient"></div>
		</div>
	)
}

export default Card