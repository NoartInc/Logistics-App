import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPengiriman } from "../../store/actions/pengiriman-action";
import moment from "moment";
import _ from "lodash";
import IconUpdatePengiriman from '../../images/IconUpdatePengiriman';
import { serverImagePath } from "../../utils/Utils";
import PengirimanInformasiForm from "./PengirimanInformasiForm";

function HistoryItem({ proses_by, status, image, createdAt, note, produksi_by }) {
  return (
    <li className="mb-6 ml-6">
      <IconUpdatePengiriman status={status} />
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
        {status} by {produksi_by ? produksi_by?.fullName : proses_by?.fullName}
        <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
          [{proses_by?.jabatan}]
        </span>
      </h3>
      <div className="block mb-2 text-sm font-normal leading-none text-gray-400">
        {moment(createdAt).format("DD MMMM YYYY")}
      </div>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
        {moment(createdAt).format("HH:mm:ss")}
      </time>
      <p className="text-base font-normal text-gray-500">
        {note}
      </p>
      {/* Bisa set width dan height di image atau pake style, bisa juga tambahkan anchor <a> */}
      {/* silahkan di set sendiri mas */}
      {image && !image.match(/wikimedia.org/g) && (
        <a href={`${serverImagePath()}${image}`} target="_blank">
          <img src={`${serverImagePath()}${image}`} alt="Uploaded Photos" style={{ width: 320, height: 'auto' }} />
        </a>
      )}
    </li>
  );
}

function DetailPengirimanContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentData, setCurrentData] = React.useState(null);
  const [teliList, setTeliList] = React.useState("");

  const getCurrentData = () => {

    dispatch(editPengiriman(id)).then((res) => {
      let current_data = {
        ...res.data,
        history: _.sortBy(res.data.history, ["id"])
      };
      setCurrentData(current_data);
    }).then(() => {
    })
  };


  const findTeli = () => {
    let telies = currentData?.history?.find(item => item.status === "dimuat")?.teli.map(item => {
      return item?.teliPerson?.fullName
    }).join(",");
    setTeliList(telies);
  }

  React.useEffect(() => {
    getCurrentData();
  }, [id]);

  React.useEffect(() => {
    findTeli();
  }, [currentData?.history]);

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6 bg-white p-5 rounded-xl">
        <div className="md:col-span-1 mb-6">
          <button
            onClick={() => navigate("/listpengiriman")}
            type="button"
            className="mb-3 text-gray-700 border border-gray-100 hover:bg-gray-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="px-4 sm:px-0 border-2 rounded-xl mb-3">
            <div className="px-2 mt-2 mb-2">
              <h3 className="text-lg font-bold leading-6 text-gray-900">
                Informasi Pengiriman
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-700">
                No Surat Jalan :
                <span className="ml-1 text-sm text-gray-500">
                  {currentData?.suratJalan}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Tanggal Order :
                <span className="ml-1 text-sm text-gray-500">
                  {moment(currentData?.tanggalOrder).format("DD/MM/YYYY")}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Gudang :
                <span className="ml-1 text-sm text-gray-500">
                  {currentData?.gudang}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Driver :
                <span className="ml-1 text-sm text-gray-500">
                  {currentData?.drivers?.fullName}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Kendaraan :
                <span className="ml-1 text-sm text-gray-500">
                  {currentData?.kendaraans?.kendaraan}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Teli :
                <span className="ml-1 text-sm text-gray-500">
                  {teliList}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Produksi :
                <span className="ml-1 text-sm text-gray-500">
                  {currentData?.produksi_by?.fullName}
                </span>
              </p>
              {/* <p className="mt-1 text-sm font-medium text-gray-700">
                Date of Shipment :
                <span className="ml-1 text-sm text-gray-500">
                  {currentData?.createdAt}
                </span>
              </p> */}
              <p className="mt-1 text-sm font-medium text-gray-700">
                Customer :
                <span className="ml-1 text-sm text-gray-500">
                  {currentData?.customers?.customer}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Sales :
                <span className="ml-1 text-sm text-gray-500">
                  {currentData?.customers?.salesUser?.fullName}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Alamat :
                <span className="ml-1 text-sm text-gray-500">
                  {currentData?.address}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                PO :
                <span className="ml-1 text-sm text-gray-500">
                  {currentData?.pengangkutans?.pengangkutan}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Note :
                <span className="ml-1 text-sm text-gray-500">
                  {currentData?.note}
                </span>
              </p>
              <p className="mt-1 text-sm font-medium text-gray-700">
                Driver Contact :
                <span className="ml-1 text-sm font-bold text-gray-500">
                  {currentData?.drivers?.contact}
                </span>
              </p>
            </div>
          </div>
          <div className="p-4 border-2 rounded-xl">
            <PengirimanInformasiForm data={currentData} />
          </div>
        </div>
        {/* <div className="mt-5 md:mt-0 md:col-span-4"> */}
        <ol className="relative border-l border-gray-200 ml-10">
          {currentData?.history?.map((history, index) => (
            <HistoryItem key={index} {...history} />
          ))}
          {/* <li className="mb-6 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Diproses by Qori{" "}
              <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">
                [Logistik]
              </span>
            </h3>
            <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              22 January 2022
            </date>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              10:00 AM
            </time>
          </li>
          <li className="mb-6 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Dimuat by Martasi{" "}
              <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">
                [Teli]
              </span>
            </h3>
            <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              22 January 2022
            </date>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              10:00 AM
            </time>
          </li>
          <li className="mb-6 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Selesai Dimuat by Martasi{" "}
              <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">
                [Teli]
              </span>
            </h3>
            <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              22 January 2022
            </date>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              10:00 AM
            </time>
          </li>
          <li className="mb-6 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Dikirim by Sopian{" "}
              <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">
                [Driver]
              </span>
            </h3>
            <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              22 January 2022
            </date>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              11:00 AM
            </time>
          </li>
          <li className="mb-6 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600 dark:text-blue-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Selesai Dikirim by Sopian{" "}
              <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">
                [Driver]
              </span>
            </h3>
            <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              22 January 2022
            </date>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              10:00 AM
            </time>
          </li>
          <li className="mb-6 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-orange-200 rounded-full ring-8 ring-white dark:ring-orange-900 dark:bg-orange-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-orange-500 dark:text-orange-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Dipending by Qori{" "}
              <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">
                [Logistik]
              </span>
            </h3>
            <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              22 January 2022
            </date>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              10:00 AM
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Barang yg dimuat salah
            </p>
          </li>
          <li className="mb-6 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-red-200 rounded-full ring-8 ring-white dark:ring-red-900 dark:bg-red-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-red-500 dark:text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Dicancel by Qori{" "}
              <span className="bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3">
                [Logistik]
              </span>
            </h3>
            <date className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              22 January 2022
            </date>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              10:00 AM
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Customer Cancel
            </p>
          </li> */}
        </ol>
      </div>
      {/* </div> */}
    </div>
  );
}

export default DetailPengirimanContent;
