import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"


export default function Property(props) {

  const navigate = useNavigate()

  return (
    props.data.map(e=>{
      return (
        <>
        <div className="Content" onClick={() => navigate(`/propertyDetails/${e.id}`)}>
      
        <h1>{e.id}</h1>
      <h1>{e.propertyType}</h1>
       <h1>{e.price}</h1>
      <h1>{e.bedrooms}</h1>
      <h1>{e.bathrooms}</h1>
      <h1>{e.propertyStatus}</h1>
      <h1>{e.lotSize}</h1>
      <h1>{e.builtYear}</h1>
      <h1>{e.listingType}</h1>
      {/* <h1>{e.address}</h1> */}
      {/* <h1>{e.photos}</h1> */}
      {/* <h1>{e.propertyDetails}</h1> */}
      <h1>{e.offers}</h1>
      <h1>{e.customers}</h1>
      <h1>{e.startedDate}</h1>
      <div className="Info">
        <div className="Property">{}</div>
      </div>
      <br />
    </div>
    </>
      )
    })
    

  )
}
