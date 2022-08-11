import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTeli, countTonase } from "../../store/actions/teli-action";

function TeliDetailProfile() {

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState(null);
  const [totalTonase, setTotalTonase] = useState(0);

  const getTotalTonase = () => {
    dispatch(countTonase(id)).then((total) => setTotalTonase(total))
  }

  const getCurrentData = () => {
    dispatch(editTeli(id)).then((res) => {
        setCurrentData(res)
    })
  };

  useEffect(() => {
    getCurrentData()
    getTotalTonase()
  }, [id]);

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-1 md:gap-6 bg-white p-5 rounded-xl">
        <div className="md:col-span-1 mb-6">
          <button
            onClick={() => navigate("/masterteli")}
            type="button"
            className="mb-3 shadow-md text-gray-700 border border-gray-100 hover:bg-gray-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
          <div className="px-4 py-2 sm:px-0 border-1 rounded-xl shadow-md">
            <header className="px-2 mt-2 mb-6">
              <h3 className="text-xl font-bold uppercase leading-6 text-gray-700">
                Informasi Teli
              </h3>
            </header>
            <div className="flex flex-row justify-between px-2 mt-2 mb-2 border-b-2">
              <p className="text-base mb-2 font-medium uppercase text-gray-700">
                Nama Teli : {currentData?.fullName}
              </p>
              <p className="text-base mb-2 font-medium uppercase text-gray-700">
                Location : {currentData?.location}
              </p>
              <p className="text-base mb-2 font-medium uppercase text-gray-700">
                Contact : {currentData?.contact}
              </p>
            </div>
            <body className="grid grid-col justify-center px-2 mt-4 mb-2">
              <div className="flex flex-row px-2 py-2 my-4 shadow-2xl rounded-xl bg-white">
                <div className="p-2 bg-blue-300 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                </div>
                <div className="flex-col">
                  <p className="text-lg font-semibold mb-1 uppercase text-gray-600">
                    Total Berat
                  </p>
                  <p className="text-xl text-center font-semibold uppercase text-emerald-600">
                    {totalTonase}
                  </p>
                </div>
              </div>
            </body>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeliDetailProfile;
