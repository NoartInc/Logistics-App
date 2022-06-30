import React from 'react';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01() {

  

  return (
    
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <div className="p-3 text-blue-200 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#05B4E1">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        </div>
      
      <div>
        <p className="text-3xl font-bold text-slate-800 mt-3">
          10
        </p>
        <p className="text-base font-semibold text-slate-400 mt-2">
          Pesanan Diproses
        </p>
      </div>
    </div>
  )
}

export default DashboardCard01;
