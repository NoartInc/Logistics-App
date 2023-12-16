import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import PengirimanModalEditForm from "../../partials/pengiriman-content/PengirimanModalEditForm";
import PengirimanModalModify from "../../partials/pengiriman-content/PengirimanModalModify";
import PengirimanTableContent, { StatusPill } from "../../partials/pengiriman-content/PengirimanTableContent";
import { deletePengiriman, retrievePengiriman, updateExclude } from "../../store/actions/pengiriman-action";
import { ROLES_MANAGEMENTS, userData } from "../../utils/constants";
import moment from "moment";
import CheckboxInput from "../../components/CheckboxInput";
import { retrieveGrading } from "../../store/actions/grading-action";

function ListPengiriman() {
  const dispatch = useDispatch();
  const pengirimans = useSelector((state) => state.pengirimans.list);
  const gradings = useSelector(state => state?.gradings?.list);
  const { user } = userData;

  useEffect(() => {
    dispatch(retrievePengiriman());
    dispatch(retrieveGrading());
  }, []);

  const removePengiriman = (id) => {
    if (window.confirm("Are you sure you want to remove this pengiriman?")) {
      dispatch(deletePengiriman(id));
    }
  };

  const setExclude = (id, value) => {
    dispatch(updateExclude({ id, exclude: value }))
      .then(result => {
        window.alert(result?.message);
      })
      .catch(err => {
        window.alert(JSON.stringify(err));
      })
  }

  const columns = useMemo(
    () => [
      {
        Header: "Action",
        // accessor: 'action',
        Cell: (pengirimans) => (
          <div className="flex justify-start gap-x-1">
            {ROLES_MANAGEMENTS["exclude_pengiriman"]?.allowedRoles.includes(
              user?.role
            ) && (
              <CheckboxInput value={pengirimans?.row?.original?.exclude} onChange={(value) => setExclude(pengirimans?.row?.original?.id, value)} />
            )}
            {ROLES_MANAGEMENTS["delete_pengiriman"]?.allowedRoles.includes(
              user?.role
            ) && 
            ROLES_MANAGEMENTS["delete_pengiriman"][
              `allowedStatus_${user?.role}`
            ]?.includes(pengirimans?.row?.original?.status) && (
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
            {/* mungkin karena tdai belum di import */}
            {/* allowed statusnya butuh ? wait saya cek constant */}
            {ROLES_MANAGEMENTS["modify_pengiriman"]?.allowedRoles.includes(
              user?.role
            ) && 
            ROLES_MANAGEMENTS["modify_pengiriman"][
              `allowedStatus_${user?.role}`
            ]?.includes(pengirimans?.row?.original?.status) && (
                <PengirimanModalModify
                  id={pengirimans?.row?.original?.id}
                  status={pengirimans?.row?.original?.status}
                />
              )}
            {ROLES_MANAGEMENTS["update_pengiriman"]?.allowedRoles.includes(
              user?.role
            ) &&
              ROLES_MANAGEMENTS["update_pengiriman"][
                `allowedStatus_${user?.role}`
              ]?.includes(pengirimans?.row?.original?.status) && (
                <PengirimanModalEditForm
                  id={pengirimans?.row?.original?.id}
                />
              )}
          </div>
        ),
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
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
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
        Header: "Tanggal Order",
        accessor: "tanggalOrder",
        Cell: (data) => (
          <span className="w-32 block">{data?.row?.original?.tanggalOrder ? moment(data?.row?.original?.tanggalOrder).format("DD/MM/YYYY") : "-"}</span>
        )
      },
      {
        Header: "Progress Time",
        Cell: (data) => (
          <strong className="w-32 block">{data?.row?.original?.tanggalOrder ? progressDuration(data?.row?.original?.tanggalOrder) : "-"}</strong>
        )
      },
      {
        Header: "Durasi",
        Cell: (data) => (
          <span className={`${data?.row?.original?.exclude ? "text-orange-500" : ""} font-semibold`}>
            {data?.row?.original?.exclude 
              ? "Excluded" 
              : getGradingData(getTerkirimDay(data?.row?.original?.tanggalOrder, data?.row?.original?.tanggalKirim))
            }
          </span>
        )
      }
    ],
    []
  );

  const progressDuration = (start) => {
    const startDate = moment(start);
    const endDate = moment();
    const duration = moment.duration(endDate.diff(startDate));
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    let formattedDuration = "";

    if (days !== 0) {
      formattedDuration += `${days}d`;
    }

    if (hours !== 0) {
      formattedDuration += ` ${hours}h`;
    }

    if (minutes !== 0) {
      formattedDuration += ` ${minutes}m`;
    }

    return formattedDuration.trim();
  }

  const getTerkirimDay = (start, end) => {
    if (end === null) {
      return null;
    }

    const startDate = moment(start);
    const endDate = moment(end);
    const duration = moment.duration(endDate.diff(startDate));
    const days = duration.days();
    return days;
  }

  const getGradingData = (dayCount) => {
    if (dayCount === null) {
      return "-";
    }

    const grade = gradings?.find(item => item?.gradeValue === dayCount);
    return grade?.gradeName ?? "-";
  }

  return <PengirimanTableContent columns={columns} data={pengirimans} />
}

export default ListPengiriman;
