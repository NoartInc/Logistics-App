import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../../partials/Banner';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

import CustomerModalEditForm from '../../partials/customer-content/CustomerModalEditForm';
import CustomerTableContent, { StatusPill } from '../../partials/customer-content/CustomerTableContent';
import { retrieveCustomers, deleteCustomer } from "../../store/actions/customer-action";


function MasterCustomer() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const customers = useSelector((state) => state.customers.list);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(retrieveCustomers());
    }, []);

    const removeCustomers = (id) => {
      if (window.confirm('Are you sure you want to remove?')) {
        dispatch(deleteCustomer(id));
      }
    };

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
              // accessor: 'action',
              Cell: (customers) => (
                <div className="flex justify-start">
                  <CustomerModalEditForm id={customers.row.original.id}/>
                  <svg onClick={() => removeCustomers(customers.row.original.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400 cursor-pointer" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              ),
          },
      ],[])

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

          <CustomerTableContent columns={columns} data={customers} />

          </div>
        </main>

        <Banner />

      </div>
    </div>
  )
}

export default MasterCustomer