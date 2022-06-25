import React from 'react';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard02() {

  

  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <div className="p-3 text-blue-200 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="#05B4E1">
          <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </div>
      
      <div>
        <p className="text-3xl font-bold text-slate-800 mt-3">
          29
        </p>
        <p className="text-base font-semibold text-slate-400 mt-2">
          Pesanan Dimuat
        </p>
      </div>
    </div>
  );
}

export default DashboardCard02;
