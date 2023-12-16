import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editPengiriman,
  updatePengiriman,
} from "../../store/actions/pengiriman-action";
import { STATUS_PENGIRIMAN, userData } from "../../utils/constants";
import TeliOptions from "../options/TeliOptions";
import http from "../../../http-common";
import ProduksiOptions from "../options/ProduksiOptions";

function PengirimanModalEditForm({ id = null }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const currentData = useSelector((state) => state.pengirimans.selectedData);
  const { user } = userData;

  const [form, setForm] = useState({});
  const [previewImage, setPreviewImage] = useState("https://angelofshiva.com/resources/assets/images/no-file.png");

  useEffect(() => {
    setForm(currentData);
  }, [currentData]);

  const editData = async (id) => {
    dispatch(editPengiriman(id)).then(res => {
      setForm((prevState) => ({
        ...prevState,
        id: id,
        suratJalan: res?.data?.suratJalan
      }));
      setShowModal(true);
    })
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

  const onUpload = (e) => {
    if (e.target.files.length > 0) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setForm(prevState => ({
        ...prevState,
        image: e.target.files[0]
      }));
    } else {
      setPreviewImage("https://angelofshiva.com/resources/assets/images/no-file.png");
      setForm(prevState => ({
        ...prevState,
        image: null
      }))
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePengiriman(form));
    setShowModal(false);
  };

  return (
    <>
      <svg
        type="button"
        onClick={() => editData(id)}
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-blue-400 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
      {/* <button type="button" onClick={() => setShowModal(true)} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalLg">Tambah Customer</button> */}
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
                      Update Progress
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
                        <label
                          htmlFor="status"
                          className="block text-xs font-medium uppercase text-gray-500"
                        >
                          Update Progress<span className="text-red-600">*</span>
                        </label>
                        <select
                          onChange={onInputChange}
                          id="status"
                          name="status"
                          className="mt-1 block w-96 py-2 px-3 cursor-pointer border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                          value={form?.status}
                        >
                          <option value="">---Pilih Status---</option>
                          {STATUS_PENGIRIMAN[user?.role]?.map(
                            ({ value, key }) => (
                              <option key={key} value={key}>
                                {value}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      {(form?.status === "terkirim" ||
                        form?.status === "pending" ||
                        form?.status === "cancel") && (
                          <div className="mb-3 col-span-6 sm:col-span-6">
                            <label
                              htmlFor="note"
                              className="block text-xs font-medium uppercase text-gray-500"
                            >
                              Note
                            </label>
                            <textarea
                              onChange={onInputChange}
                              type="text"
                              name="note"
                              id="note"
                              rows="4"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              placeholder="Masukan pesan disini .."
                              value={form?.note}
                            />
                          </div>
                        )}

                      {(form?.status === "terkirim" ||
                        form?.status === "pending") && (
                          <>
                            <div className="mb-3 col-span-6 sm:col-span-6">
                              <label
                                htmlFor="img"
                                className="block text-xs font-medium uppercase text-gray-500"
                              >
                                Submit Surat Jalan
                              </label>
                              <input
                                className="mt-1 block w-96 py-2 px-3 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-400 cursor-pointer focus:outline-none"
                                id="formFile"
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={onUpload}
                              // value={(URL.createObjectURL(e.target.files[0]))}
                              />
                            </div>
                            {form.image && <img src={previewImage} alt="image" />}
                          </>
                        )}

                      {form?.status === "dicetak" && (
                        <div className="mb-3 col-span-6 sm:col-span-6">
                          <label
                            htmlFor="produksiId"
                            className="block text-xs font-medium uppercase text-gray-500"
                          >
                            Produksi
                          </label>
                          <ProduksiOptions
                            onChange={onInputChange}
                            value={form?.produksiId}
                          />
                        </div>
                      )}

                      {form?.status === "dimuat" && (
                        <div className="mb-3 col-span-6 sm:col-span-6">
                          <label
                            htmlFor="teli"
                            className="block text-xs font-medium uppercase text-gray-500"
                          >
                            Teli
                          </label>
                          <TeliOptions
                            onChange={onInputChange}
                            value={form?.teli}
                          />
                        </div>
                      )}
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
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </form>
        </>
      ) : null}
    </>
  );
}

export default PengirimanModalEditForm;
