import React, { useContext, useEffect, useState } from 'react'
import userAxios from '../../util/axios';
import { UserContext } from '../../context/UserContext';

function OwnerOffers() {
  const [offers, setOffers] = useState([])
  const { user } = useContext(UserContext);
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    if (user) {
      userAxios.get(`http://localhost:8080/api/v1/owners/${user.id}/offers`)
        .then(res => setOffers(res.data))
        .catch(err => console.log(err))
    }
  }, [flag, user])

  const acceptNextStep = (offerId) => {
    userAxios.put(`http://localhost:8080/api/v1/owners/${user.id}/offers/${offerId}/accept`)
      .then(() => { alert("Successfully accepted"); setFlag(!flag) })
      .catch(err => console.log(err))
  }

  const declineOffer = (offerId) => {
    userAxios.put(`http://localhost:8080/api/v1/owners/${user.id}/offers/${offerId}/decline`)
      .then(() => { alert("Successfully Declined"); setFlag(!flag) })
      .catch(err => console.log(err))
  }

  const getClasses = (val) => {
    switch (val) {
      case "WAITING":
        return "bg-yellow-100 text-yellow-700"
      case "ACCEPTED":
        return "bg-green-200 text-green-700"
      case "DECLINED":
        return "bg-red-200 text-red-700"
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-medium">My Offers</h1>


      <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Listing Type
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Property Price
              </th>
              <th scope="col" className="px-6 py-3">
                Offer Price
              </th>
              <th scope="col" className="px-6 py-3">
                Offer Status
              </th>
              <th scope="col" className="px-6 py-3">
                Property Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(even)]:bg-gray-100">
            {offers.map(o => (
              <tr key={o.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-6 py-4">
                  {o.id}
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {o.property?.listingType}
                </th>
                <td className="px-6 py-4">
                  {o.property?.address?.street} {o.property?.address?.city}, {o.property?.address?.state}
                </td>
                <td className="px-6 py-4">
                  ${o.property?.price}
                </td>
                <td className="px-6 py-4">
                  {o.price}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 rounded-xl font-medium text-xs ${getClasses(o.status)}`}>{o.status}</span>
                </td>
                <td className="px-6 py-4">
                  {o.property?.propertyStatus}
                </td>
                <td className="px-6 py-4">
                  <button disabled={o.property?.propertyStatus === 'RENTED' || o.property?.propertyStatus === 'SOLD'} onClick={() => acceptNextStep(o.id)} className="font-medium text-blue-600 dark:text-blue-500 enabled:hover:underline mr-3 disabled:text-gray-500">Accept</button>
                  <button disabled={o.status === 'DECLINED' || o.property?.propertyStatus === 'RENTED' || o.property?.propertyStatus === 'SOLD'} onClick={() => declineOffer(o.id)} className="font-medium text-red-600 dark:text-blue-500 enabled:hover:underline disabled:text-gray-500">Reject</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default OwnerOffers