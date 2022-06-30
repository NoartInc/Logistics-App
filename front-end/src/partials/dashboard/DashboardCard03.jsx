import React from 'react';


// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard03() {

  

  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <div className="p-3 text-blue-200 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#05B4E1">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      
      <div>
        <p className="text-3xl font-bold text-slate-800 mt-3">
          20
        </p>
        <p className="text-base font-semibold text-slate-400 mt-2">
          Pesanan Termuat
        </p>
      </div>
    </div>
  );
}

export default DashboardCard03;
