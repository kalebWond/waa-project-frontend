import { Route, Routes, Navigate } from "react-router";
import PropertyDetails from "../../components/Properties/PropertyDetails"
import Property from "../../components/Properties/Property";
import Properties from "../../components/Properties/Properties";




export default function PageRoutes(props) {
    return (
        <Routes>
            <Route path="/propertyDetails/:id" element={<PropertyDetails/> } />
            {/* <Route path="/property" element={<Property/> } /> */}
            <Route path="/property" element={<Properties/> } />
            
        </Routes>
    );
}


