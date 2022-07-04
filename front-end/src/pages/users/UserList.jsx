import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import Banner from '../../partials/Banner';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

import UserListContent2, { SelectColumnFilter, StatusPill } from '../../partials/users-items/UserListContent2';
import UserModalEditForm from '../../partials/users-items/UserModalEditForm';
// import { createTable, useTableInstance } from '@tanstack/react-table'



const getData = () => {
  const data = [
    {
        id: '0',
        fullname: 'M Afif Dalianda',
        username: 'afif',
        password: 'afif',
        role: 'Administrator',
        jabatan: 'IT',
        contact: '01823646123',
        email: 'afif@mail.com',
        status: 'active',
    },
    {
        id: '1',
        fullname: 'Dennis Chiang',
        username: 'denis',
        password: 'denis',
        role: 'Manager',
        jabatan: 'HRD', 
        contact: '01823612343',
        email: 'dennis@mail.com',
        status: 'inactive',
    },
  ]
  return [...data]  
}


function UserList() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);

    const getUsers = async () => {
      const response = await axios.get('http://localhost:5000/userlist');
      setUsers(response.data)
    }

    const deleteUsers = async (id) => {
      await axios.delete('http://localhost:5000/userlist/${id}')
      getUsers();
    }

    const columns = useMemo(
      () => [
          {
              Header: 'ID',
              accessor: 'id'
          },
          {
              Header: 'Fullname',
              accessor: 'fullname'
          },
          {
              Header: 'Username',
              accessor: 'username'
          },
          {
              Header: 'Password',
              accessor: 'password'
          },
          {
              Header: 'Role',
              Filter: SelectColumnFilter,
              accessor: 'role'
          },
          {
              Header: 'Jabatan',
              accessor: 'jabatan'
          },
          {
              Header: 'Contact',
              accessor: 'contact'
          },
          {
              Header: 'Email',
              accessor: 'email'
          },
          {
              Header: 'Status',
              accessor: 'status',
              Cell: StatusPill,
          },
          {
              Header: 'Action',
              accessor: 'action',
              Cell: () => (
                <div className="flex justify-start">
                  {/* Edit Icon */}
                  <UserModalEditForm />
                  {/* Delete Icon */}
                  <svg onClick={() => deleteUsers(user.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400 cursor-pointer" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              ),
          },
      ],[])

  const data = useMemo(() => getData(), [])

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Content */}
            <div className="grid gap-6 mb-8 md:grid-cols-1 xl:grid-cols-1">

              <UserListContent2 columns={columns} data={data} />

            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  )
}

export default UserList