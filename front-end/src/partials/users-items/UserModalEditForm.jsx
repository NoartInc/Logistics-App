import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, updateUser } from "../../store/actions/user-action";

function UserModalEditForm({ id = null }) {
  const dispatch = useDispatch();
  const currentData = useSelector((state) => state.users.selectedData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(currentData);
  }, [currentData]);

  const editData = (id) => {
    dispatch(editUser(id));
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
    dispatch(updateUser(form));
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
      {/* <button type="button" onClick={() => setShowModal(true)} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalLg">Tambah user</button> */}
      {showModal ? (
        <>
          <form onSubmit={onSubmit}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-4xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-lg font-semibold uppercase">
                      Edit User
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
                    <div className="grid grid-cols-9 gap-9 px-4 py-4">
                      <div className="col-span-9 sm:col-span-3">
                        <label
                          htmlFor="fullname"
                          className="block text-xs font-medium uppercase text-gray-500"
                        >
                          Fullname<span className="text-red-600">*</span>
                        </label>
                        <input
                          onChange={onInputChange}
                          type="text"
                          name="fullName"
                          id="fullName"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={form?.fullName}
                        />
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label
                          htmlFor="userName"
                          className="block text-xs font-medium uppercase text-gray-500"
                        >
                          Username<span className="text-red-600">*</span>
                        </label>
                        <input
                          onChange={onInputChange}
                          type="text"
                          name="userName"
                          id="userName"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={form?.userName}
                        />
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label
                          htmlFor="password"
                          className="block text-xs font-medium uppercase text-gray-500"
                        >
                          Password<span className="text-red-600">*</span>
                        </label>
                        <input
                          onChange={onInputChange}
                          type="text"
                          name="password"
                          id="password"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={form?.password}
                        />
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label
                          htmlFor="role"
                          className="block text-xs font-medium uppercase text-gray-500"
                        >
                          Role<span className="text-red-600">*</span>
                        </label>
                        <select
                          onChange={onInputChange}
                          id="role"
                          name="role"
                          autoComplete="role"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={form?.role}
                        >
                            <option value=''>--Pilih role--</option>
                            <option value='administrator'>Administrator</option>
                            <option value='driver'>Driver</option>
                            <option value='logistics'>Logistics</option>
                            <option value='teli'>Teli</option>
                            <option value='produksi'>Produksi</option>
                            <option value='cbo'>CBO</option>
                            <option value='sales'>Sales</option>
                            <option value='manager'>Manager</option>
                            <option value='telemarketing'>Tele Marketing</option>
                        </select>
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label
                          htmlFor="jabatan"
                          className="block text-xs font-medium uppercase text-gray-500"
                        >
                          Jabatan
                        </label>
                        <input
                          onChange={onInputChange}
                          type="text"
                          name="jabatan"
                          id="jabatan"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={form?.jabatan}
                        />
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium uppercase text-gray-500"
                        >
                          Email
                        </label>
                        <input
                          onChange={onInputChange}
                          type="text"
                          name="email"
                          id="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={form?.email}
                        />
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label
                          htmlFor="contact"
                          className="block text-xs font-medium uppercase text-gray-500"
                        >
                          Contact<span className="text-red-600">*</span>
                        </label>
                        <input
                          onChange={onInputChange}
                          type="text"
                          name="contact"
                          id="contact"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={form?.contact}
                        />
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label
                          htmlFor="status"
                          className="block text-xs font-medium uppercase text-gray-500"
                        >
                          Status<span className="text-red-600">*</span>
                        </label>
                        <select
                          onChange={onInputChange}
                          id="status"
                          name="status"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={form?.status}
                        >
                          <option value="">---Pilih Status---</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 hover:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Edit
                    </button>
                    <button
                      className="text-gray-500 background-transparent hover:bg-gray-200 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
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

export default UserModalEditForm;
