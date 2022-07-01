import React, { useMemo, useState } from 'react'
import Banner from '../../partials/Banner';
import Header from '../../partials/Header';
import PengirimanModalEditForm from '../../partials/pengiriman-content/PengirimanModalEditForm';
import PengirimanTableContent, { StatusPill } from '../../partials/pengiriman-content/PengirimanTableContent';
import Sidebar from '../../partials/Sidebar';

const getData = () => {
  const dataPengiriman = [
    {
        id: '0',
        date: '12 Jun 2022',
        surat_jalan: 'GP 2503022',
        customer: 'CV SUMBER JAYA',
        driver: 'SOPIAN',
        kendaraan: 'BK 8521 EV',
        status: 'terkirim',
        sales: 'YONI'
    },
    {
        id: '1',
        date: '12 Jun 2022',
        surat_jalan: 'GP 2503022',
        customer: 'CV SEJAHTERA INDAH',
        driver: 'SOPIAN',
        kendaraan: 'BK 8521 EV',
        status: 'diproses',
        sales: 'JONI'
    },
    {
        id: '2',
        date: '12 Jun 2022',
        surat_jalan: 'GP 2503022',
        customer: 'CV SUMBER JAYA',
        driver: 'SOPIAN',
        kendaraan: 'BK 8521 EV',
        status: 'pending',
        sales: 'YONI'
  },
  {
        id: '3',
        date: '12 Jun 2022',
        surat_jalan: 'GP 2503022',
        customer: 'CV SEJAHTERA INDAH',
        driver: 'SOPIAN',
        kendaraan: 'BK 8521 EV',
        status: 'cancel',
        sales: 'JONI'
  },
  ]
  return [...dataPengiriman, ...dataPengiriman, ...dataPengiriman, ...dataPengiriman, ...dataPengiriman, ...dataPengiriman]  
}

function ListPengiriman() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const columns = useMemo(
      () => [
          // {
          //     Header: 'ID',
          //     accessor: 'id'
          // },
          {
              Header: 'Date',
              accessor: 'date'
          },
          {
              Header: 'SuratJalan',
              accessor: 'surat_jalan',
              Cell: e =><a href={e.value} className="hover:text-blue-700 font-semibold"> {e.value} </a>
          },
          {
              Header: 'Driver',
              accessor: 'driver'
          },
          {
              Header: 'Kendaraan',
              accessor: 'kendaraan'
          },
          {
              Header: 'Customer',
              accessor: 'customer'
          },
          {
              Header: 'Sales',
              accessor: 'sales'
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
                  <PengirimanModalEditForm />
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400 cursor-pointer" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              ),
          },
      ],[])

  const dataPengiriman = useMemo(() => getData(), [])

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

          <PengirimanTableContent columns={columns} data={dataPengiriman} />

          </div>
        </main>

        <Banner />

      </div>
    </div>
  )
}

export default ListPengiriman