import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../../partials/Banner";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

import KendaraanModalEditForm from "../../partials/kendaraan-content/KendaraanModalEditForm";
import KendaraanTableContent, {
  StatusPill,
} from "../../partials/kendaraan-content/KendaraanTableContent";
import {
  retrieveKendaraan,
  deleteKendaraan,
} from "../../store/actions/kendaraan-action";
import { ROLES_MANAGEMENTS, userData } from "../../utils/constants";

function MasterKendaraan() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const kendaraans = useSelector((state) => state.kendaraans.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveKendaraan());
  }, []);

  const removeKendaraan = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      dispatch(deleteKendaraan(id));
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Kendaraan",
        accessor: "kendaraan",
      },
      {
        Header: "Roda",
        accessor: "roda",
      },
      {
        Header: "Merk",
        accessor: "merk",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Action",
        // accessor: '',
        Cell: (kendaraans) => (
          <div className="flex justify-start">
            {ROLES_MANAGEMENTS["delete_kendaraan"].allowedRoles.includes(
              userData?.user?.role
            ) && <KendaraanModalEditForm id={kendaraans.row.original.id} />}
            {ROLES_MANAGEMENTS["delete_kendaraan"].allowedRoles.includes(
              userData?.user?.role
            ) && (
              <svg
                onClick={() => removeKendaraan(kendaraans.row.original.id)}
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            )}
          </div>
        ),
      },
    ],
    []
  );

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
            <KendaraanTableContent columns={columns} data={kendaraans} />
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
}

export default MasterKendaraan;
