import React, { useEffect, useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';

import { result } from 'lodash';
import DashboardCount from '../partials/widgets/DashboardCount';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboard } from "../store/actions/pengiriman-action";

function DashboardCard({count, status }) {

  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-xs">
      <div className="p-3 text-blue-200 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-200">
        <DashboardCount status={status} />
      </div>
      
      <div>
        <p className="text-3xl font-bold text-slate-800 mt-3">
          {count}
        </p>
        <p className="text-base font-semibold text-slate-400 mt-2">
          Pesanan {status}
        </p>
      </div>
    </div>
  )

}



function Dashboard() {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const results = useSelector((state) => state.pengirimans.summary)
  
    useEffect(() => {
      dispatch(getDashboard());
    }, []);

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

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                {/* <FilterButton /> */}
                {/* Datepicker built with flatpickr */}
                {/* <Datepicker /> */}
                {/* Add view button */}
                {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                </button>                 */}
              </div>

            </div>

            {/* Cards */}
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              
              {results && results.map(({ status, count}, index) => (
                <DashboardCard key={index} count={count} status={status} />
              ))}

              {/* <DashboardCard01  />
              
              <DashboardCard02 />
              
              <DashboardCard03 />
              
              <DashboardCard04 />
              
              <DashboardCard05 />
              
              <DashboardCard06 />
              
              <DashboardCard07 /> */}
              
            </div>

          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboard;