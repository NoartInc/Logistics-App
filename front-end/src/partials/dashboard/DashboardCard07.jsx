import React from 'react';

function DashboardCard07() {


  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <div className="p-3 text-red-200 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="red">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
      
      <div>
        <p className="text-3xl font-bold text-slate-800 mt-3">
          5
        </p>
        <p className="text-base font-semibold text-slate-400 mt-2">
          Pesanan Cancel
        </p>
      </div>
    </div>
  );
}

export default DashboardCard07;
