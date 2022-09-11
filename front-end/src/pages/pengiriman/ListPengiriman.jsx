import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import PengirimanModalEditForm from "../../partials/pengiriman-content/PengirimanModalEditForm";
import PengirimanTableContent, { StatusPill } from "../../partials/pengiriman-content/PengirimanTableContent";
import { deletePengiriman, retrievePengiriman } from "../../store/actions/pengiriman-action";
import { ROLES_MANAGEMENTS, userData } from "../../utils/constants";

function ListPengiriman() {
  const dispatch = useDispatch();
  const pengirimans = useSelector((state) => state.pengirimans.list);
  const { user } = userData;

  useEffect(() => {
    dispatch(retrievePengiriman());
  }, []);

  const removePengiriman = (id) => {
    if (window.confirm("Are you sure you want to remove this pengiriman?")) {
      dispatch(deletePengiriman(id));
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "createdAt",
      },
      {
        Header: "SuratJalan",
        accessor: "suratJalan",
        Cell: (data) => (
          <a
            href={`/listpengiriman/detailpengiriman/${data?.row?.original?.id}`}
            className="hover:text-blue-700 font-semibold hover:text-lg"
          >
            {" "}
            {data?.row?.original?.suratJalan}{" "}
          </a>
        ),
      },
      {
        Header: "Driver",
        accessor: "drivers.fullName",
        Cell: (data) => <span>{data?.row?.original?.drivers?.fullName}</span>,
      },
      {
        Header: "Kendaraan",
        accessor: "kendaraans.kendaraan",
        Cell: (data) => (
          <span>{data?.row?.original?.kendaraans?.kendaraan}</span>
        ),
      },
      {
        Header: "Customer",
        accessor: "customers.customer",
        Cell: (data) => <span>{data?.row?.original?.customers?.customer}</span>,
      },
      {
        Header: "Sales",
        accessor: "customers.salesUser.fullName",
        Cell: (data) => (
          <span>{data?.row?.original?.customers?.salesUser?.fullName}</span>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Action",
        // accessor: 'action',
        Cell: (pengirimans) => (
          <div className="flex justify-start">
            {ROLES_MANAGEMENTS["update_pengiriman"]?.allowedRoles.includes(
              user?.role
            ) &&
              ROLES_MANAGEMENTS["update_pengiriman"][
                `allowedStatus_${user?.role}`
              ]?.includes(pengirimans?.row?.original?.status) && (
                <PengirimanModalEditForm
                  id={pengirimans?.row?.original?.id}
                  status={pengirimans?.row?.original?.status}
                />
              )}
            {ROLES_MANAGEMENTS["delete_pengiriman"]?.allowedRoles.includes(
              user?.role
            ) && (
              <svg
                onClick={() => removePengiriman(pengirimans?.row?.original?.id)}
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-400 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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

  return <PengirimanTableContent columns={columns} data={pengirimans} />
}

export default ListPengiriman;
