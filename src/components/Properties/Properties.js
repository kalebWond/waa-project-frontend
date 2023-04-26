import React, {useState, useEffect} from 'react'
import { useParams, redirect, useNavigate, Link } from "react-router-dom"
import axios from 'axios'
import Property from './Property'

export default function Properties() {


  const [property, setProperty] = useState([])

  const params = useParams()

  useEffect(()=>{
    axios.get("http://localhost:8080/api/v1/properties")
      .then(res => {
        setProperty(res.data)
      })
      .catch(err => console.log(err.message))
  },[])


  return (
    
  //   property.map((e)=>{
  //     console.log(e.id);
  //     return(
  //         <Property  key={e.id} data={property}/>
  //     )
  // })
  <Property data={property}/>
  )
}
