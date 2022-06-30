import React, { useMemo, useState } from 'react'
import Banner from '../../partials/Banner';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';
import UserListContent from '../../partials/users-items/UserListContent';
import UserListContent2, { SelectColumnFilter, StatusPill } from '../../partials/users-items/UserListContent2';
// import { createTable, useTableInstance } from '@tanstack/react-table'

// const table = createTable()

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

    // const instance = useTableInstance(table, options)

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
              accessor: 'action'
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