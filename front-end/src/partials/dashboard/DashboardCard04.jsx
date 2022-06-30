import React from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <div className="p-3 text-blue-200 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#05B4E1">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      </div>
      
      <div>
        <p className="text-3xl font-bold text-slate-800 mt-3">
          35
        </p>
        <p className="text-base font-semibold text-slate-400 mt-2">
          Pesanan Dikirim
        </p>
      </div>
    </div>
  );
}

export default DashboardCard04;
