import React, { useMemo, useState } from 'react'
import Banner from '../../partials/Banner';
import Header from '../../partials/Header';
import PengangkutanModalEditForm from '../../partials/pengangkutan-content/PengangkutanModalEditForm';
import PengangkutanModalForm from '../../partials/pengangkutan-content/PengangkutanModalForm';
import PengangkutanTableContent, { StatusPill } from '../../partials/pengangkutan-content/PengangkutanTableContent';
import Sidebar from '../../partials/Sidebar';

const getData = () => {
  const dataPengangkutan = [
    {
        id: '0',
        pengangkutan: 'CV TRANSINDO JAYA',
        pic: 'RONALD',
        contact: '028375675523',
        address: 'Jl Asia  No 35 Blok E, Medan Denai, Medan, Sumatera Utara',
        status: 'active',
    },
    {
        id: '1',
        pengangkutan: 'CV MAJU JAYA SEJAHTERA',
        pic: 'ACUAN',
        contact: '012836455523',
        address: 'Jl Intan Blok F No 55, Medan Tenggara, Medan, Sumatera Utara',
        status: 'active',
    },
  ]
  return [...dataPengangkutan]  
}


function MasterPengangkutan() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const columns = useMemo(
      () => [
          {
              Header: 'ID',
              accessor: 'id'
          },
          {
              Header: 'Pengangkutan',
              accessor: 'pengangkutan'
          },
          {
              Header: 'PIC',
              accessor: 'pic'
          },
          {
              Header: 'Contact',
              accessor: 'contact'
          },
          {
              Header: 'Address',
              accessor: 'address'
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
                  <PengangkutanModalEditForm />
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400 cursor-pointer" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              ),
          },
      ],[])

  const dataPengangkutan = useMemo(() => getData(), [])
    
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

          <PengangkutanTableContent columns={columns} data={dataPengangkutan} />

          </div>
        </main>

        <Banner />

      </div>
    </div>
  )
}

export default MasterPengangkutan