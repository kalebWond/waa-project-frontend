import React, { useContext, useEffect, useState } from 'react'
import userAxios from '../../util/axios';
import { UserContext } from '../../context/UserContext';

function Owners() {
  const [owners, setOwners] = useState([])
  const { user } = useContext(UserContext);

  useEffect(() => {
    if(user) {
      userAxios.get(`http://localhost:8080/api/v1/admin/owners`)
      .then(res => setOwners(res.data))
      .catch(err => console.log(err))
    }
  },[])
//firstName, lastName, email, password, status

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-medium">Customers</h1>


      <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              First Name
              </th>
              <th scope="col" className="px-6 py-3">
              Last Name
              </th>
              <th scope="col" className="px-6 py-3">
              Email
              </th>
              <th scope="col" className="px-6 py-3">
              Status
              </th>
            </tr>
          </thead>
          <tbody>
            {owners.map(o => (
              <tr key={o.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {o.firstName}
                </th>
                <td className="px-6 py-4">
                  {o.lastName} 
                </td>
                <td className="px-6 py-4">
                  {o.email}
                </td>
               
                <td className="px-6 py-4">
                  {o.status}
                </td>
          
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Owners