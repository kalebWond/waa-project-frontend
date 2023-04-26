import React, {useState, useEffect} from 'react'
import { useParams, redirect, useNavigate, Link } from "react-router-dom"
import axios from 'axios'

export default function PropertyDetails(props) {

    const [propertyDetails, setPropertyDetails] = useState({})

    const params = useParams()

    const fetchPropreties = ()=>{
        axios.get(`http://localhost:8080/api/v1/properties/${params.id}`)
        .then(res=>{
            console.log(res.data);
            setPropertyDetails(res.data)
        })
    }
  
    useEffect(()=>{
        fetchPropreties()
    },[])


    return (
        <>
        <div className="PropertyDetails">
            <div >
                <div>
                    <h3> Property Info </h3>
                {/* </div>
                Name: {property}<br />
                ID: {employeeDetail.id}
                <h3>Projects:</h3>

                {employeeDetail.projectList?
                employeeDetail.map(project=>{
                    return(
                        <Project key={project.id} data={project}/>
                    )
                }):<p>No projects assigned</p>}
                
                <Link to={`/manageProjects/${params.id}`}>Manage Projects</Link>
                <button onClick={deleteEmployee}>Delete</button>
                <button onClick={()=>navigate('/employees')}>Back</button> */}
            </div>
        </div>
        </div>
        </>
    )
}
