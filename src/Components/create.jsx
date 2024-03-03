import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const [users, setUsers] = useState([]);
  return (
    <div className="App text-center">
      <h1 className="text-center">React crud operation </h1><br></br>
      <form className=' box-border h-32  mx-auto'>
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            First name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="Name"
              id="name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={name} onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div><br></br>

        <div className="col-span-full">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="Email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div><br></br>

        <div className="col-span-full">
          <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
            Mobile number
          </label>
          <div className="mt-2">
            <input
              id="mobile"
              name="Mobile"
              type="tel"
              autoComplete="tel"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
        </div><br></br>

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
            address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="Address"
              id="address"
              autoComplete="street-address"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div><br></br>
        <div className="mt-6 flex items-center justify-start gap-x-6">

          <button
            type="submit"
            className="rounded-md px-3 py-2 text-sm font-semibold  text-gray-900"
          >
            Save
          </button>
        </div>
        </form>
        </div>
        );
    }
    
    export default App;
    