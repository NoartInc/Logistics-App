import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';
import EditMenu from '../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01() {

  const chartData = {
    // labels: [
    //   '12-01-2020', '01-01-2021', '02-01-2021',
    //   '03-01-2021', '04-01-2021', '05-01-2021',
    //   '06-01-2021', '07-01-2021', '08-01-2021',
    //   '09-01-2021', '10-01-2021', '11-01-2021',
    //   '12-01-2021', '01-01-2022', '02-01-2022',
    //   '03-01-2022', '04-01-2022', '05-01-2022',
    //   '06-01-2022', '07-01-2022', '08-01-2022',
    //   '09-01-2022', '10-01-2022', '11-01-2022',
    //   '12-01-2022', '01-01-2023',
    // ],
    // datasets: [
      // Indigo line
      // {
      //   data: [
      //     732, 610, 610, 504, 504, 504, 349,
      //     349, 504, 342, 504, 610, 391, 192,
      //     154, 273, 191, 191, 126, 263, 349,
      //     252, 423, 622, 470, 532,
      //   ],
      //   fill: true,
      //   backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
      //   borderColor: tailwindConfig().theme.colors.indigo[500],
      //   borderWidth: 2,
      //   tension: 0,
      //   pointRadius: 0,
      //   pointHoverRadius: 3,
      //   pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
      //   clip: 20,
      // },
      // Gray line
      // {
      //   data: [
      //     532, 532, 532, 404, 404, 314, 314,
      //     314, 314, 314, 234, 314, 234, 234,
      //     314, 314, 314, 388, 314, 202, 202,
      //     202, 202, 314, 720, 642,
      //   ],
      //   borderColor: tailwindConfig().theme.colors.slate[300],
      //   borderWidth: 2,
      //   tension: 0,
      //   pointRadius: 0,
      //   pointHoverRadius: 3,
      //   pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
      //   clip: 20,
      // },
    // ],
  };

  return (
    
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
      <div className="p-3 text-blue-200 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#05B4E1">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
        </svg>
        </div>
      {/* </div> */}
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
    // <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
    //   <div className="px-5 pt-5">
    //     {/* <header className="flex justify-between items-start mb-2"> */}
    //       {/* Icon */}

    //       <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="#05B4E1">
    //         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            
    //       </svg>


          {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
          {/* Menu button */}
          {/* <EditMenu className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 1</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 2</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </EditMenu> */}
        {/* </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Acme Plus</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">$24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
        </div>
      </div> */}
      {/* Chart built with Chart.js 3 */}
      {/* <div className="grow"> */}
        {/* Change the height attribute to adjust the chart height */}
        {/* <LineChart data={chartData} width={389} height={128} /> */}
      {/* </div> */}
    //   </div>
    // </div>
}

export default DashboardCard01;
