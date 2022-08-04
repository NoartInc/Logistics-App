import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../../partials/Banner';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

import PengirimanModalEditForm from '../../partials/pengiriman-content/PengirimanModalEditForm';
import PengirimanTableContent, { StatusPill } from '../../partials/pengiriman-content/PengirimanTableContent';
import { deletePengiriman, retrievePengiriman } from '../../store/actions/pengiriman-action';
import moment from 'moment';



function ListPengiriman() {

    const dispatch = useDispatch();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pengirimans = useSelector((state) => state.pengirimans.list);

    useEffect(() => {
      dispatch(retrievePengiriman())
    }, []);

    const removePengiriman = (id) => {
      if (window.confirm('Are you sure you want to remove this pengiriman?')) {
        dispatch(deletePengiriman(id))
      }
    };

    
    const columns = useMemo(
      () => [
          {
              Header: 'Date',
              accessor: 'createdAt',
          }, 
          {
              Header: 'SuratJalan',
              accessor: 'suratJalan',
              Cell: (data) => (
                <a href={`/listpengiriman/detailpengiriman/${data?.row?.original?.id}`} className="hover:text-blue-700 font-semibold"> {data?.row?.original?.suratJalan} </a>
              )
          },
          {
              Header: 'Driver',
              accessor: 'drivers.fullName',
              Cell: (data) => (
                <span>{data?.row?.original?.drivers?.fullName}</span>
              )
          },
          {
              Header: 'Kendaraan',
              accessor: 'kendaraans.kendaraan',
              Cell: (data) => (
                <span>{data?.row?.original?.kendaraans?.kendaraan}</span>
              )
          },
          {
              Header: 'Customer',
              accessor: 'customers.customer',
              Cell: (data) => (
                <span>{data?.row?.original?.customers?.customer}</span>
              )
          },
          {
              Header: 'Sales',
              accessor: 'customers.salesUser.fullName',
              Cell: (data) => (
                <span>{data?.row?.original?.customers?.salesUser?.fullName}</span>
              )
          },
          {
              Header: 'Status',
              accessor: 'status',
              Cell: StatusPill,
          },
          {
              Header: 'Action',
              // accessor: 'action',
              Cell: (pengirimans) => (
                <div className="flex justify-start">
                  <PengirimanModalEditForm id={pengirimans?.row?.original?.id}/>
                  <svg onClick={() => removePengiriman(pengirimans?.row?.original?.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400 cursor-pointer" fill="none"
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

          <PengirimanTableContent columns={columns} data={pengirimans} />

          </div>
        </main>

        <Banner />

      </div>
    </div>
  )
}

export default ListPengiriman