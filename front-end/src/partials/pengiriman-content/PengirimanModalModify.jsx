import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  modifyPengiriman,
  updatePengiriman,
  updateData,
  retrievePengiriman
} from "../../store/actions/pengiriman-action";
import DriverOptions from "../options/DriverOptions";
import KendaraanOptions from "../options/KendaraanOptions";
import { userData } from "../../utils/constants";

function PengirimanModalModify({ id = null, driver, kendaraan }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const currentData = useSelector((state) => state.pengirimans.selectedData);
  const { user } = userData;
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(currentData);
  }, [currentData]);

  const modifyData = (id) => {
    setForm((prevState) => ({
      ...prevState,
      id: id,
    }));
    dispatch(modifyPengiriman(id));
    setShowModal(true);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // coba mau tau, saya mau reload list setelah update selesai
    // gunakan konsep promised base
    // coba disini.
    // lupa ? wkwkkw kasih contoh 
    // keywordnya then isee
    // wait
    dispatch(updateData(form))
    .then(() => {
      window.alert('Pengiriman modifed successfully');
      dispatch(retrievePengiriman());
      // skr coba lagi
    })
    .catch(err => {
      window.alert(err);
    })
    setShowModal(false);
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => modifyData(id)}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
        />
      </svg>
      {showModal ? (
        <>
          <form onSubmit={onSubmit}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-4xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold uppercase">
                      Modify Pengiriman
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="#808080"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="mt-5 md:mt-0 md:col-span-4">
                    <div className="grid grid-cols-6 px-4 py-4">
                      <div className="mb-3 col-span-6 sm:col-span-6">
                        <div className="mb-6 col-span-6 sm:col-span-6">
                          <label
                            htmlFor="driver"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Driver
                          </label>
                          <DriverOptions onChange={onInputChange} />
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="kendaraan"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Kendaraan
                          </label>
                          <KendaraanOptions onChange={onInputChange} />
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 hover:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Update
                      </button>
                      <button
                        className="text-gray-500 background-transparent hover:bg-gray-200 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="cancel"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </form>
        </>
      ) : null}
    </>
  );
}

export default PengirimanModalModify;
