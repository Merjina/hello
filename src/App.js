import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);;
  const [users, setUsers] = useState([]);

  const addUser = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      mobile,
      address
    };
    if(edit){
      let copy=users;
      Object.assign(copy[active],user);
      setUsers([...copy]);
      setEdit(false);
      setActive(null);
    }else{
    setUsers([...users, user]);
    }
    setName("");
    setEmail("");
    setMobile("");
    setAddress("");
  };

  const onEditClick = (index) => {
    const user = users[index];
    setName(user.name);
    setEmail(user.email);
    setMobile(user.mobile);
    setAddress(user.address);

    setActive(index);
    setEdit(true);
  };
  const deleteUser=(user)=>{
    if(window.confirm("are u want to delete ?")){
      let copy=users.filter(item=>item !==user);
      setUsers([...copy]);
    }
  }

  return (
    <div className="App text-center">
      <h1 className="text-center">React CRUD Operation</h1>
      <br />
      <form onSubmit={addUser} className="box-border h-32 mx-auto max-w-md">
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
        </div>
        <br />
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
        </div>
        <br />
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
        </div>
        <br />
        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
            Address
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
        </div>
        <br />
        <div className="mt-6 flex items-center justify-start gap-x-6">
          <button
            type="submit"
            className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-white"
          >  
            {edit ? "Update" : "Submit "}
          </button>
        </div>
      </form>
      <br />

      <div className="container mt-80 mx-auto ">
        <div className="bg-white shadow-lg rounded-lg">
          <div className="card-body">
            <h5 className="text-center text-2xl font-semibold mb-4">Student List</h5>
            <div className="p-3"></div>
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Mobile</th>
                  <th className="py-2 px-4">Address</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4">{user.name}</td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4">{user.mobile}</td>
                    <td className="py-2 px-4">{user.address}</td>
                    <td className="py-2 px-4">
                      <button
                      className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white mr-2"
                        onClick={() => onEditClick(index)}>
                        Edit
                      </button>
                      <button
                        className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white"
                        onClick={()=>deleteUser(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
