import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import { UserContext } from '../context/UserContext'

function Property({ data, isFav, toggleFav }) {
  const { user } = useContext(UserContext);
  const nav = useNavigate();

  return (
    <div className="border group rounded-md hover:shadow-md transition">
      <div className="w-full relative h-64">
        <img src="http://localhost:3000/img/house.webp" alt="" className="h-full" />
        {user && (
          <button onClick={() => toggleFav(data.id, isFav)} type="button"
            className="absolute bottom-1 right-2 rounded-full p-1 text-red-600 hover:text-white active:scale-110 transition">
            { !isFav ? <HeartIcon className="h-10 w-10" aria-hidden="true" /> : <HeartSolid className="h-10 w-10" aria-hidden="true" />}

          </button>
        )}
      </div>
      <Link to={"/properties/" + data.id}  className="flex flex-col px-2 py-3">
        <h1>For {data.listingType}</h1>
        <div className="flex justify-between">
          <p><strong>{data.bedrooms}</strong><span> bed</span></p>
          <p><strong>{data.bathrooms}</strong><span> bath</span></p>
        </div>
        <div className="flex justify-between items-center">
          <p className='w-1/2'>{data.address?.street}, {data.address?.city}, {data.address?.state} {data.address?.zipcode}</p>
          
          { user && <button onClick={() => nav("/customer/offers/add/"+data.id)} className="rounded-xl border hover:border-sky-700 px-2 py-0.5 transition">Make offer</button> }
        </div>
      </Link>
    </div>
  )
}

export default Property