import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import './Property.css'


export default function Property(props) {

  

  // useEffect(() => {
  //   // Update localStorage whenever the favorites list changes
  //   // localStorage.setItem('favorites', JSON.stringify(favorites));
  // }, [favorites]);


  const navigate = useNavigate()




  return (
    props.data.map(e => {
      return (
        <>

          <div className="Content" onClick={() => navigate(`/propertyDetails/${e.id}`)}>
            {/* <div>
              <button onClick={handleFavoriteButtonClick}>
                {isFavorite ? (
                  <img src="favorite-filled.png" alt="Favorite" />
                ) : (
                  <img src="favorite-empty.png" alt="Not favorite" />
                )}
              </button>
              <button onClick={handleFavoriteButtonClick}>
                <img src={imageSrc} alt={altText} />
              </button>
            </div> */}
            <h1>property type :{e.propertyType}</h1>
            <h1>price :{e.price}</h1>
            <h1>bedrooms :{e.bedrooms}</h1>
            <h1>bathrooms :{e.bathrooms}</h1>
            <h1>property status :{e.propertyStatus}</h1>
            <h1>lot size :{e.lotSize}</h1>
            <h1>listing type :{e.listingType}</h1>
            <h1>city :{e.address.street}</h1>
            <h1>city :{e.address.city}</h1>
            <h1>state :{e.address.state}</h1>
            <h1>zip code :{e.address.zipcode}</h1>
            <h1>pet :{e.propertyDetails.pet}</h1>

            <div className="Info">
              <div className="Property">{ }</div>
            </div>
          </div>
        </>
      )
    })


  )
}
