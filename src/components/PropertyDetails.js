import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import userAxios from '../util/axios'
import { UserContext } from '../context/UserContext'

function PropertyDetails() {
    const { id } = useParams();
    const { user } = useContext(UserContext)
    const [property, setProperty] = useState(null);
    const [isFav, setIsFav] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/properties/${id}`)
            .then(res => setProperty(res.data))
            .catch(err => console.log(err))
        if (user) {
            fetchFavs();
        }
    }, [])

    const fetchFavs = () => {
        userAxios.get(`http://localhost:8080/api/v1/customers/${user.id}/favorites`)
            .then(({ data }) => {
                const ids = data.map(dt => dt.id)
                const includes = ids.includes(parseInt(id))
                setIsFav(includes)
            })
            .catch(err => console.log(err))
    }

    const toggleFav = () => {
        if (isFav) {
            userAxios.delete(`http://localhost:8080/api/v1/customers/${user.id}/favorites/${id}`)
                .then(() => {
                    setIsFav(false)
                })
                .catch(err => console.log(err))
        } else {
            userAxios.post(`http://localhost:8080/api/v1/customers/${user.id}/favorites`, { customer_id: user.id, property_id: id })
                .then(() => {
                    setIsFav(true)
                })
        }
    }

    return (
        <>
            {property && (
                <div className="">
                    <img src="http://localhost:3000/img/house.webp" alt="" className="" />
                    <div className="flex flex-col px-2 py-3 items-start">
                        <h1>For {property.listingType}</h1>
                        <h1>{property.propertyStatus}</h1>
                        <h1>{property.propertyType}</h1>
                        <h1>{property.builtYear}</h1>
                        <h1>{property.lotSize} sq. feet</h1>
                        <div className="flex">
                            <p className='mr-6'><strong>{property.bedrooms}</strong><span> bed</span></p>
                            <p><strong>{property.bathrooms}</strong><span> bath</span></p>
                        </div>
                        <div className="flex">
                            <p className='mr-6'>{property.address?.street}, {property.address?.city}, {property.address?.state} {property.address?.zipcode}</p>
                        </div>
                        <h1>More Details</h1>
                        <p>Pets: {property.propertyDetails?.pet ? "Allowed" : "Not Allowed"}</p>
                        <p>Heater: {property.propertyDetails?.heater}</p>
                        <p>Cooling: {property.propertyDetails?.cooling}</p>
                        <p>Deposit: ${property.propertyDetails?.deposit}</p>
                        {user && <div className="flex mt-3">
                            <Link to={"/customer/offers/add/"+property.id} className="rounded bg-sky-700 text-white font-semibold px-3 py-2 mr-5">Make offer</Link>
                            <button onClick={toggleFav} className="rounded border border-sky-700 text-sky-700 font-semibold px-3 py-2">{isFav ? 'Remove from favorites' : 'Add to Favorites'}</button>
                        </div>}
                    </div>
                </div>
            )}
        </>
    )
}

export default PropertyDetails