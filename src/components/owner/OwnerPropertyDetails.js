import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import userAxios from '../../util/axios'

function OwnerPropertyDetails() {
    const { id } = useParams();
    const { user } = useContext(UserContext)
    const nav = useNavigate();
    const { state } = useLocation();
    const property = state?.property;
    console.log(state)

    useEffect(() => {
        if (!property) {
            nav("/owner/properties")
        }
    }, [])

    const onSubmit = (e, price) => {

        userAxios.put(`http://localhost:8080/api/v1/owners/${user?.id}/offers/${property.id}`, { price })
            .then(() => alert("Editted"))
            .catch(err => console.log(err))
    }

    return (
        <>
            {property && (
                <div className="">
                    <img src="http://localhost:3000/img/house.webp" alt="" className="" />
                    <form className="flex flex-col px-2 py-3 items-start">
                        <h1>For {property.listingType}</h1>
                        <h1>{property.propertyStatus}</h1>
                        <h1>{property.propertyType}</h1>
                        <h1>{property.builtYear}</h1>
                        <h1 className='mt-3'><input required className="border px-3 py-2 rounded-md focus:outline-sky-500" defaultValue={property?.lotSize}
                            placeholder="Lot Size" name="lotSize" type="text" />sq. feet</h1>
                        <div className="flex my-3">
                            <p className='mr-6'>
                                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" defaultValue={property?.bedrooms}
                                    placeholder="Bedrooms" name="bedrooms" type="text" />
                                <span> bedrooms</span></p>
                            <p>
                                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" defaultValue={property?.bathrooms}
                                    placeholder="Bathrooms" name="bathrooms" type="text" />
                                <span> bathrooms</span></p>
                        </div>
                        <div className="my-3">
                            <p className=''>Address</p>
                            <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" defaultValue={`${property.address?.street}, ${property.address?.city}, ${property.address?.state} ${property.address?.zipcode}`}
                                placeholder="Address" name="address" type="text" />
                        </div>
                        <div className="my-1.5">
                            <p>Pets</p>
                            <div className="flex">
                                <label className='mr-3' htmlFor="pet-true">
                                    <input id="pet-true" type="radio" name="pet" value={true} defaultChecked={property.propertyDetails?.pet} />
                                    Allowed
                                </label>
                                <label htmlFor="pet-false">
                                    <input id="pet-false" type="radio" name="pet" value={false} defaultChecked={property.propertyDetails?.pet} />
                                    Not allowed
                                </label>
                            </div>
                        </div>
                        <p className='mt-3'>Heater: {property.propertyDetails?.heater}</p>
                        <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" defaultValue={property.propertyDetails?.header}
                            placeholder="Heater" name="heater" type="text" />
                        <p className='mt-3'>Cooling</p>
                        <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" defaultValue={property.propertyDetails?.cooling}
                            placeholder="Cooling" name="cooling" type="text" />
                        <p className='mt-3'>Deposit</p>
                        <input required className="mb-3 border px-3 py-2 rounded-md focus:outline-sky-500" defaultValue={property.propertyDetails?.deposit}
                            placeholder="Deposit" name="deposit" type="text" />
                        <div className="flex">
                            <button className="rounded bg-sky-700 text-white font-semibold px-3 py-2 mr-5">Edit Property</button>
                            <Link to="/owner/properties" className="rounded border border-sky-700 text-sky-700 font-semibold px-3 py-2">Back</Link>
                        </div>

                    </form>
                </div>
            )}
        </>
    )
}

export default OwnerPropertyDetails