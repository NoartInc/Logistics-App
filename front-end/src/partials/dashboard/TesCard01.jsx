import React from "react";

function TesCard01() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
      {/* <!-- SMALL CARD ROUNDED --> */}
        <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
          <img className="w-16 h-16 object-cover" src="https://milenyo.net/wp-content/uploads/2020/05/netflix-n-logo-png.png" alt="" />
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 dark:text-gray-300 font-semibold">Netflix</p>
            <p className="text-black dark:text-gray-100 text-justify font-semibold">$15 000,00</p>
          </div>
        </div>
    {/* <!-- END SMALL CARD ROUNDED --> */}
      </div>
    </div>
  );
}

export default TesCard01;
