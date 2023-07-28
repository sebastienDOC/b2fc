import gallery from '../../datas/images.json'
import Card from './Card'

function Gallery() {
    return (
        <div className='center' id='gallerie'>
            <h1>Portfolio</h1>
            <div className='filtres'>
                <p>Tous</p>
                <p>Entrée</p>
                <p>Salon</p>
                <p>Cuisine</p>
                <p>Chambre</p>
                <p>Salle de bain</p>
                <p>Toilettes</p>
                <p>Escaliers</p>
                <p>Terrasse</p>
                <p>Piscine</p>
            </div>
            <div className='grid'>
                {gallery.map((data) => 
                    <Card 
                        id={data.id}
                        image={data.image}
                        titre={data.titre}
                    />
                )}
            </div>
        </div>
    )
}

export default Gallery