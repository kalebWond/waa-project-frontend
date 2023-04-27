import { Route, Routes, Navigate } from "react-router";
import PropertyDetails from "../../components/Properties/PropertyDetails"
import Properties from "../../components/Properties/Properties";
import Favorites from "../../components/Favorites/Favorites";




export default function PageRoutes(props) {
    return (
        <Routes>
            <Route path="/propertyDetails/:id" element={<PropertyDetails/> } />
            <Route path="/favorite" element={<Favorites/> } />
            <Route path="/property" element={<Properties/> } />
            
        </Routes>
    );
}


