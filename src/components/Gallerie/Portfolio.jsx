import { useState } from 'react'
import gallery from '../../datas/images.json'
import Card from './Card'

function Portfolio() {
    const [items, setItems] = useState(gallery)
    function filterItem(categorieItem) {
        const updatedItems = gallery.filter((currentElement) => {
            return currentElement.categorie === categorieItem
        })
        setItems(updatedItems)
    }
    return (
        <div className='center' id='gallerie'>
            <div className='title_filters'>
            <h1>Portfolio</h1>
                <div className='filtres'>
                    <button onClick={() => setItems(gallery)}>Tous</button>
                    <button onClick={() => filterItem('Intérieur')}>Intérieur</button>
                    <button onClick={() => filterItem('Cuisine')}>Cuisine</button>
                    <button onClick={() => filterItem('Salle de bain')}>Salle de bain</button>
                    <button onClick={() => filterItem('Escaliers')}>Escaliers</button>
                    <button onClick={() => filterItem('Extérieur')}>Extérieur</button>
                </div>
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

export default Portfolio