import React, { useMemo, useState } from 'react'
import Banner from '../../partials/Banner';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';
import TeliModalEditForm from '../../partials/teli-content/TeliModalEditForm';
import TeliTableContent, { StatusPill } from '../../partials/teli-content/TeliTableContent';

const getData = () => {
  const dataTeli = [
    {
        id: '0',
        fullname: 'Martasi',
        location: 'Genteng',
        contact: '01823646123',
        status: 'active',
    },
    {
        id: '1',
        fullname: 'Syahputra',
        location: 'Deck',
        contact: '01823646123',
        status: 'active',
    },
  ]
  return [...dataTeli]  
}

function MasterTeli() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

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
              Header: 'Location',
              accessor: 'location'
          },
          {
              Header: 'Contact',
              accessor: 'contact'
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
                  <TeliModalEditForm />
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400 cursor-pointer" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              ),
          },
      ],[])

  const dataTeli = useMemo(() => getData(), [])

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

            <TeliTableContent columns={columns} data={dataTeli} />
            

            

          </div>
        </main>

        <Banner />

      </div>
    </div>
  )
}

export default MasterTeli