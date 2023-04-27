import React, { useRef } from 'react'
import userAxios from '../../util/axios'

function AddProperty() {
  const formRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const body = {
      firstName: form["firstName"].value,
      lastName: form["lastName"].value,
      email: form["email"].value,
      password: form["password"].value,
      role: form["role"].value
    }

    userAxios.post('http://localhost:8080/api/v1/auth/signup', body)
      .then(() => { alert("Successfully registered"); form.reset() })
      .catch(err => console.log(err))
  }

    return (
        <div className="flex flex-col items-center">
            <form className="flex border px-24 py-12 rounded-md flex-col" ref={formRef} onSubmit={onSubmit}>
                <img
                    className="hidden h-8 w-auto lg:block mb-3"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
                <h1 className="text-center text-lg mb-6 font-medium">Add your property</h1>
                {/* <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="First Name" name="firstName" type="text" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="Last Name" name="lastName" type="text" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="E-mail" name="email" type="email" /> <br />
                <input required className="border px-3 py-2 rounded-md focus:outline-sky-500" placeholder="Password" name="password" type="password" /> <br />
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
                <button className="rounded-md mt-8 px-3 py-2 bg-sky-600 p-1 text-white hover:bg-sky-700 hover:text-white focus:outline-none transitions">Add property</button>
            </form>
        </div>
    )
}

export default AddProperty