import React, { useState, useEffect, version } from "react";
import { useParams, redirect, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Property.css";
import Favorites from "../Favorites/Favorites";

export default function PropertyDetails(props) {
  const [propertyDetails, setPropertyDetails] = useState({});

  const [favorites, setFavorites] = useState(false);

  const [offer, setOffer] = useState("");

  const params = useParams();

  // const fetchPropreties = () => {

  // }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/properties/${params.id}`)
      .then((res) => {
        // console.log(res.data);
        setPropertyDetails(res.data);
      });
  }, []);

  const addingFavorite = () => {
    // const propertyId = params.id;
    // const customerId = 2;

    // axios.post(`http://localhost:8080/api/v1/customers/${customerId}/favorites`, {
    //     "customer_id": customerId,
    //     "property_id": propertyId
    // }).then(res => {
    setFavorites(!favorites);
    //     console.log(res.data);
    // }).catch(err => { console.log(err.message); })
  };

  return (
    <div className="Content">
      {/* <h1>Id : {propertyDetails.id}</h1> */}
      <h1>propertyType :{propertyDetails.propertyType}</h1>
      <h1>Price :{propertyDetails.price}</h1>
      <h1>bedrooms :{propertyDetails.bedrooms}</h1>
      <h1>bathrooms :{propertyDetails.bathrooms}</h1>
      <h1>propertyStatus :{propertyDetails.propertyStatus}</h1>
      <h1>lotSize :{propertyDetails.lotSize}</h1>
      <h1>builtYear :{propertyDetails.builtYear}</h1>
      <h1>listingType :{propertyDetails.listingType}</h1>
      {/* <h1>street :{propertyDetails.address.street}</h1> */}
      {/* <h1>city :{propertyDetails.address.city}</h1> */}
      {/* <h1>state :{propertyDetails.address.state}</h1> */}
      {/* <h1>zip code :{propertyDetails.address.zipcode}</h1>  */}
      {/* <h1>{propertyDetails.photos}</h1>  */}
      {/* <h1>colling :{propertyDetails.propertyDetails.cooling}</h1> */}
      {/* <h1>deposit :{propertyDetails.propertyDetails.deposit}</h1> */}
      {/* <h1>heater :{propertyDetails.propertyDetails.heater}</h1> */}
      {/* <h1>pet :{propertyDetails.propertyDetails.pet}</h1>  */}
      <h1>offers :{propertyDetails.offers}</h1>
      <h1>customers :{propertyDetails.customers}</h1>
      <h1>startedDate : {propertyDetails.startedDate}</h1>
      <div className="Info">
        <div className="Property">{}</div>
      </div>
      <div>
        <label>Offer amount in</label>
        <input
          type="text"
          value="Offer amount in $"
          onChange={(e) => setOffer(e.target.value)}
        ></input>
        <button>List an offer</button>
      </div>
      <div>
        {favorites ? (
          <button onClick={() => addingFavorite()}>Remove from Favorite</button>
        ) : (
          <button onClick={() => addingFavorite()}>Add To Favorite</button>
        )}
      </div>
      {/* <Favorites data={favorites}/> */}
    </div>
  );
}
