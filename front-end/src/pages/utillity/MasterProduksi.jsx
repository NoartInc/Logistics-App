import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProduksiModalEditForm from "../../partials/produksi-content/ProduksiModalEditForm";
import ProduksiTableContent, {
  StatusPill,
} from "../../partials/produksi-content/ProduksiTableContent";
import { retrieveProduksis, deleteProduksi} from "../../store/actions/produksi-action";
import { ROLES_MANAGEMENTS, userData } from "../../utils/constants";

function MasterProduksi() {
  const dispatch = useDispatch();
  const produksis = useSelector((state) => state.produksis.list);
  // const [startDate, setStartDate] = useState(localStorage.getItem("startDate") ?? moment().format("YYYY-MM-DD"));
  // const [endDate, setEndDate] = useState(localStorage.getItem("endDate") ?? moment().add(1, "days").format("YYYY-MM-DD"));

  // const onStartChange = (value) => {
  //   setStartDate(value);
  //   localStorage.setItem("startDate", value);
  // }

  // const onEndChange = (value) => {
  //   setEndDate(value);
  //   localStorage.setItem("endDate", value);
  // }
  useEffect(() => {
    dispatch(retrieveProduksis());
  }, []);


  const removeProduksi = (id) => {
    if (window.confirm("Are you sure you want to remove?")) {
      dispatch(deleteProduksi(id));
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Fullname",
        accessor: "fullName",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Contact",
        accessor: "contact",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      {
        Header: "Action",
        // accessor: 'action',
        Cell: (produksis) => (
          <div className="flex justify-start">
            {ROLES_MANAGEMENTS["update_produksi"].allowedRoles.includes(
              userData?.user?.role
            ) && <ProduksiModalEditForm id={produksis.row.original.id} />}
            {ROLES_MANAGEMENTS["delete_produksi"].allowedRoles.includes(
              userData?.user?.role
            ) && (
              <svg
                onClick={() => removeProduksi(produksis.row.original.id)}
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
  );

  return <ProduksiTableContent 
    columns={columns} 
    data={produksis} 
    // startDate={startDate}
    // endDate={endDate}
    // setStartDate={onStartChange}
    // setEndDate={onEndChange}
  />;
}

export default MasterProduksi;
