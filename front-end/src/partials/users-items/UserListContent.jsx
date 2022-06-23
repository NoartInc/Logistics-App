import React from 'react'

function UserListContent() {

    const users = [
        {
            id: '0',
            fullname: 'M Afif Dalianda',
            username: 'afif',
            password: 'admin',
            role: 'Administrator',
            jabatan: 'IT',
            contact: '081233454567',
            email: 'admin@mail.com',
        },
        {
            id: '1',
            fullname: 'Priyono',
            username: 'wakpri',
            password: 'wakpri',
            role: 'Logistik',
            jabatan: 'Kepala Logistik',
            contact: '081233454567',
            email: 'wakrpi@mail.com'
        },
        
    ]

  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="sm:flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center">
          <header className="px-5 py-4 ">
            <h2 className="font-semibold text-slate-800">Users</h2>
          </header>
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Tambah User</button>
            <div class="flex justify-center">
            <div className="mb-1 xl:w-36">
                <div className="input-group relative items-stretch w-full mb-4">
                    <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                        <button className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                </div>
              </div>
            </div>
         </div>
        </div>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">No</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Fullname</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Username</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Password</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Role</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Jabatan</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Kontak</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                users.map(user => {
                  return (
                    <tr key={user.id} className='odd:bg-white even:bg-slate-50'>
                      <td className="p-2 whitespace-nowrap">
                        {/* <div className="flex items-center"> */}
                          {/* <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={users.image} width="40" height="40" alt={users.name} />
                          </div> */}
                          <div className="text-left">{user.id}</div>
                        {/* </div> */}
                      </td>
                      <td className="p-2 whitespace-nowrap font-semibold">
                        <div className="text-left">{user.fullname}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{user.username}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{user.password}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{user.role}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{user.jabatan}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{user.contact}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{user.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400 cursor-pointer" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400 cursor-pointer" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

        {/* Table Footer */}
        <div className="flex justify-center mt-2">
          <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
              <li className="page-item"><a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                  href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a></li>
              <li className="page-item"><a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#">1</a></li>
              <li className="page-item"><a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#">2</a></li>
              <li className="page-item"><a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#">3</a></li>
              <li className="page-item"><a
                  className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a></li>
            </ul>
          </nav>
        </div>
        
      </div>
    </div>
  )
}

export default UserListContent