import React, { useState } from 'react'
import Banner from '../../partials/Banner';
import Header from '../../partials/Header';
import DetailPengirimanContent from '../../partials/pengiriman-content/DetailPengirimanContent';
import Sidebar from '../../partials/Sidebar';

function DetailPengiriman() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

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

            <DetailPengirimanContent />

          </div>
        </main>

        <Banner />

      </div>
    </div>
  )
}

export default DetailPengiriman