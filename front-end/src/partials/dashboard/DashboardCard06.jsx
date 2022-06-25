import React from 'react';


function DashboardCard06() {

  

  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <div className="p-3 text-orange-200 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-200">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="orange">
        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
      </svg>
      </div>
      
      <div>
        <p className="text-3xl font-bold text-slate-800 mt-3">
          8
        </p>
        <p className="text-base font-semibold text-slate-400 mt-2">
          Pesanan Pending
        </p>
      </div>
    </div>
  );
}

export default DashboardCard06;
