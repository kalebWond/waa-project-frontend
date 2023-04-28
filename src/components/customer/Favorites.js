import React, { useContext, useEffect } from 'react'
import userAxios from '../../util/axios'
import { UserContext } from '../../context/UserContext'

function Favorites() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    userAxios.get(`http://localhost:8080/api/v1/customers/${user.id}/favorites`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div>Favorites</div>
  )
}

export default Favorites