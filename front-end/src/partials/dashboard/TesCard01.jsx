import React from "react";

function TesCard01() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">A</header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Acme Plus</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Sales
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">$24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">
            +49%
          </div>
        </div>
      </div>
    </div>
  );
}

export default TesCard01;
