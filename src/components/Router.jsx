import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Gallery from '../pages/gallery';
import Error from '../components/Error404';

function Router() {
    return (
        <Routes>
            <Route path="/b2fc" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default Router