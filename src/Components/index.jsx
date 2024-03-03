import React from 'react'

export default function index() {
  return (
    <div>
    <div className="container mx-auto">
    <div className="w-full lg:w-3/4 xl:w-2/3 mx-auto">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="card-body">
          <h5 className="text-center text-2xl font-semibold mb-4">Student List</h5>
          <div className="p-3">
          </div>
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
                      className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white"
                    >
                      Delete
                    </button>
                    <button
                      className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>    </table>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}
