import React, { useContext, useEffect, useState } from 'react'
import userAxios from '../../util/axios'
import { UserContext } from '../../context/UserContext'
import Property from '../Property';

function Favorites() {
  const { user } = useContext(UserContext);
  const [favs, setFavs] = useState([])

  useEffect(() => {
    userAxios.get(`http://localhost:8080/api/v1/customers/${user.id}/favorites`)
      .then(({ data }) => setFavs(data))
      .catch(err => console.log(err))
  }, [])

  const checkIfFav = (pptId) => {
    return favs.some(fav => fav.id === pptId)
  }

  const toggleFav = (id, isFav) => {
    if (isFav) {
      userAxios.delete(`http://localhost:8080/api/v1/customers/${user.id}/favorites/${id}`)
        .then(() => {
          const newFavs = favs.filter(fav => fav.id !== id)
          console.log(newFavs)
          setFavs(newFavs)
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className="grid gap-8 grid-cols-3 grid-rows-3">
      {favs.map(fav => <Property isFav={checkIfFav(fav.id)} key={fav.id} data={fav} toggleFav={toggleFav} />)}
      { favs.length === 0 && <h1>No favorite properties</h1> }
    </div>
  )
}

export default Favorites