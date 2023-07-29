import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className='error'>
            <p className='error_404'>404</p>
            <p className='error_txt'>Oups, il semblerait qu'il y ai un problème !</p>
            <Link className='error_link' to="/">Revenir à la page d'acceuil</Link>
        </div>
    )
}

export default Error