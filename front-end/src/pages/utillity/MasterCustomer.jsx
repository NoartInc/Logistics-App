import React, { useMemo, useState } from 'react'
import Banner from '../../partials/Banner';
import CustomerModalEditForm from '../../partials/customer-content/CustomerModalEditForm';
import CustomerModalForm from '../../partials/customer-content/CustomerModalForm';
import CustomerTableContent, { StatusPill } from '../../partials/customer-content/CustomerTableContent';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

const getData = () => {
  const dataCustomer = [
    {
        id: '0',
        customer: 'CV SUMBER CAHAYA',
        pic: 'BUDI',
        contact: '01283675523',
        address: 'Jl Brigjend Katamso No 45, Medan Polonia, Medan, Sumatera Utara',
        status: 'active',
        sales: 'YONI'
    },
    {
        id: '1',
        customer: 'TB TADIKA MESRA',
        pic: 'AHONG',
        contact: '01283675523',
        address: 'Jl Budi Kemasyarakatan No 55, Medan Barat, Medan, Sumatera Utara',
        status: 'active',
        sales: 'JONI'
    },
  ]
  return [...dataCustomer]  
}

function MasterCustomer() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const columns = useMemo(
      () => [
          {
              Header: 'ID',
              accessor: 'id'
          },
          {
              Header: 'Customer',
              accessor: 'customer'
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
                  <CustomerModalEditForm />
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400 cursor-pointer" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              ),
          },
      ],[])

  const dataCustomer = useMemo(() => getData(), [])

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

          <CustomerTableContent columns={columns} data={dataCustomer} />

          </div>
        </main>

        <Banner />

      </div>
    </div>
  )
}

export default MasterCustomer