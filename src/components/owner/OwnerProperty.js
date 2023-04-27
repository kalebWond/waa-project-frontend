import React from 'react'
import { Link } from 'react-router-dom'

function OwnerProperty({ data }) {
    return (
        <div className="border group rounded-md hover:shadow-md transition">
          <div className="w-full relative h-64">
            <img src="http://localhost:3000/img/house.webp" alt="" className="h-full" />
          </div>
          <Link to={"/owner/properties/" + data.id} state={{property: data}} className="flex flex-col px-2 py-3">
            <h1>For {data.listingType}</h1>
            <div className="flex justify-between">
              <p><strong>{data.bedrooms}</strong><span> bed</span></p>
              <p><strong>{data.bathrooms}</strong><span> bath</span></p>
            </div>
            <div className="flex justify-between items-center">
              <p className='w-1/2'>{data.address?.street}, {data.address?.city}, {data.address?.state} {data.address?.zipcode}</p>
              
            </div>
          </Link>
        </div>
      )
}

export default OwnerProperty