import { useState } from 'react'
import gallery from '../../datas/images.json'
import Card from './Card'

function Gallery() {
    const [items, setItems] = useState(gallery)
    function filterItem(categorieItem) {
        const updatedItems = gallery.filter((currentElement) => {
            return currentElement.categorie === categorieItem
        })
        setItems(updatedItems)
    }
    return (
        <div className='center' id='gallerie'>
            <h1>Portfolio</h1>
            <div className='filtres'>
                <button onClick={() => setItems(gallery)}>Tous</button>
                <button onClick={() => filterItem('Salon')}>Salon</button>
                <button onClick={() => filterItem('Cuisine')}>Cuisine</button>
                <button onClick={() => filterItem('Chambre')}>Chambre</button>
                <button onClick={() => filterItem('Salle de bain')}>Salle de bain</button>
                <button onClick={() => filterItem('Toilettes')}>Toilettes</button>
                <button onClick={() => filterItem('Escaliers')}>Escaliers</button>
                <button onClick={() => filterItem('Terrasse')}>Terrasse</button>
                <button onClick={() => filterItem('Piscine')}>Piscine</button>
            </div>
            <div className='grid'>
                {items.map((data) => 
                    <Card 
                        key={data.id}
                        image={data.image}
                        titre={data.titre}
                    />
                )}
            </div>
        </div>
    )
}

export default Gallery