import React, { useContext, useRef } from "react";
import userAxios from "../../util/axios";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from '../../context/UserContext';


function AddProperty() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const params= useParams();

  const AddHandler = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const body = {
      propertyType: form["propertyType"].value,
      propertyStatus: form["propertyStatus"].value,
      price: form["price"].value,
      bedrooms: form["bedrooms"].value,
      bathrooms: form["bathrooms"].value,
      lotSize: form["lotSize"].value,
      builtYear: form["builtYear"].value,
      listingType: form["listingType"].value,
      photos: [{
        "link": "htttp://link.com"
        }],
      
      propertyDetails: {
        pet: form["pet"].value,
        cooling: form["cooling"].value,
        heater: form["heater"].value,
        deposit: form["deposit"].value,
      },
      address: {
        street: form["street"].value,
        city: form["city"].value,
        state: form["state"].value,
        zipcode: form["zipcode"].value,
      },
      
    offers: [],
    customers: []
    };

    if(user) {
      userAxios.post(`http://localhost:8080/api/v1/owners/${user.id}/properties`, body)
      .then(() => navigate("/properties"))
    .catch(err => console.log(err))
    }

   
  };

  //  const onSubmit = (e) => {
  //     e.preventDefault();
  //     const form = formRef.current;
  //     const body = {
  //       firstName: form["firstName"].value,
  //       lastName: form["lastName"].value,
  //       email: form["email"].value,
  //       password: form["password"].value,
  //       role: form["role"].value,
  //     };

  //     userAxios
  //       .post("http://localhost:8080/api/v1/auth/signup", body)
  //       .then(() => {
  //         alert("Successfully registered");
  //          form.reset();
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return (
    <div className="flex  flex-col items-center">
      <form
        ref={formRef}
        onSubmit={AddHandler}
        className="flex border px-24 py-12 rounded-md flex-col"
      >
        <img
          className="hidden h-8 w-auto lg:block mb-3"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
        <h1 className="text-center text-lg mb-6 font-medium">
          Add your property
        </h1>
        <label className="font-bold" htmlFor="propertyType">
          Property Type:
        </label>
        <select
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          name="propertyType"
          id="propertyType"
        >
          <option value="">Select Property Type</option>
          <option value="HOUSE">HOUSE</option>
          <option value="APARTMENT">APARTMENT</option>
          <option value="CONDO">CONDO</option>
          {/* Add more options for other property types */}
        </select>
        <br />
        <label className="font-bold" htmlFor="price">
          Price:
        </label>
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          type="number"
          name="price"
          id="price"
        />
        <br />

        <label className="font-bold" htmlFor="price">
          Bed Rooms:
        </label>
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          type="number"
          name="bedrooms"
          id="bedrooms"
        />
        <br />
        <label className="font-bold" htmlFor="price">
          Bath Rooms:
        </label>
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          type="number"
          name="bathrooms"
          id="bathrooms"
        />
        <br />
        <label className="font-bold" htmlFor="price">
          Lot Size:
        </label>
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          type="number"
          name="lotSize"
          id="lotSize"
        />
        <br />

        <label className="font-bold" htmlFor="price">
          Built Year:
        </label>
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          type="date"
          name="builtYear"
          id="builtYear"
        />
        <br />

        <label className="font-bold" htmlFor="price">
          PropertyStatus:
        </label>
        <select
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          name="propertyStatus"
          id="propertyStatus"
        >
          <option value="">Select Property Status</option>
          <option value="AVAILABLE">AVAILABLE</option>
          <option value="PENDING">PENDING</option>
          <option value="CONTINGENT">CONTINGENT</option>
          <option value="SOLD">SOLD</option>
          <option value="RENTED">RENTED</option>
          {/* Add more options for other property types */}
        </select>
        <br />
        <label className="font-bold" htmlFor="listingType">
          Listing Type:
        </label>
        <select
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          name="listingType"
          id="listingType"
        >
          <option value="">Select Listing Type</option>
          <option value="RENT">RENT</option>
          <option value="SALE">SALE</option>
        </select>
        <br />
        <label className="font-bold" htmlFor="address">
          Address: *
        </label>
        <div className="flex">
          <input
            required
            className="border px-3 py-2 rounded-md focus:outline-sky-500"
            placeholder="Street*"
            type="text"
            name="street"
            id="street"
          />

          <br />
          <input
            required
            className="border px-3 py-2 rounded-md focus:outline-sky-500"
            placeholder="City*"
            type="text"
            name="city"
            id="city"
          />
        </div>
        <br />
        <div className="flex">
          <input
            required
            className="border px-3 py-2 rounded-md focus:outline-sky-500"
            placeholder="State*"
            type="text"
            name="state"
            id="state"
          />
          <br />
          <input
            required
            className="border px-3 py-2 rounded-md focus:outline-sky-500"
            placeholder="Zipcode*"
            type="text"
            name="zipcode"
            id="zipcode"
          />
        </div>
        <br />
        <label className="font-bold" htmlFor="propertyDetails">
          Property Details:
        </label>
        <div className="gap-4">
          <label className="font-bold mr-4" htmlFor="pet">
            Pet Allowed:
            <input
              required
              className="mr-2"
              type="checkbox"
              name="pet"
              id="pet"
            />
          </label>
        </div>

        <br />
        <label className="font-bold" htmlFor="cooling">
          Cooling:
        </label>
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          type="text"
          name="cooling"
          id="cooling"
        />
        <br />

        <label className="font-bold" htmlFor="heater">
          Heater:
        </label>
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          type="text"
          name="heater"
          id="heater"
        />
        <br />
        <label className="font-bold" htmlFor="deposit">
          Deposit:
        </label>
        <input
          required
          className="border px-3 py-2 rounded-md focus:outline-sky-500"
          type="number"
          name="deposit"
          id="deposit"
        />
        {/* <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="Property Type" name="PropertyType" type="text" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="Price" name="price" type="text" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="Bed Rooms" name="bedrooms" type="number" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="Bath Rooms" name="bathrooms" type="number" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="Property Status" name="PropertyStatus" type="text" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="Built Year" name="builtYear" type="date" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="Bed Rooms" name="Listing Type" type="ListingType" /> <br />

                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="Street" name="street" type="text" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="City" name="city" type="text" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="State" name="state" type="text" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="zipcode" name="zipcode" type="text" /> <br />

                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="Photos" name="photos" type="img" /> <br />

                <div className="flex justify-evenly">
                    <label className='mr-3' htmlFor="cus">
                        <input id="cus" type="radio" name="role" value="CUSTOMER" />
                        <span className="ml-1">Customer</span>
                    </label>
                    <label className='mr-3' htmlFor="own">
                        <input id="own" type="radio" name="role" value="OWNER" />
                        <span className="ml-1">Owner</span>
                    </label>
                </div> */}
        <button className="rounded-md mt-8 px-3 py-2 bg-sky-600 p-1 text-white hover:bg-sky-700 hover:text-white focus:outline-none transitions">
          Add property
        </button>
      </form>
    </div>
  );
}

export default AddProperty;
