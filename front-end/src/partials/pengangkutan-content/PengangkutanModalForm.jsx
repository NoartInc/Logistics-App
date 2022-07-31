import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPengangkutan } from '../../store/actions/pengangkutan-action';

function PengangkutanModalForm() {

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({
      pengangkutan: '',
      pic: '',
      contact: '',
      address: '',
      status: '',
    });

    const onInputChange = (e) => {
      const {name, value} = e.target;
      setForm(prevState => {

        return{
          ...prevState,
          [name]: value
        }
      });
    }

    const onSubmit = (e) => {
      e.preventDefault();
      dispatch(createPengangkutan(form))
      setShowModal(false);
    }


  return (
    <>
      <button type="button" onClick={() => setShowModal(true)} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalLg">Tambah Pengangkutan</button>
      {showModal ? (
        <>
        <form onSubmit={onSubmit}>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold uppercase">
                    Tambah Pengangkutan
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="#808080" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
                {/*body*/}
                <div className="mt-5 md:mt-0 md:col-span-4">
                  
                    <div className="grid grid-cols-9 gap-9 px-4 py-4">

                      <div className="col-span-9 sm:col-span-3">
                        <label for="pengangkutan" className="block text-xs font-medium uppercase text-gray-500">Pengangkutan<span className="text-red-600">*</span></label>
                        <input onChange={onInputChange} type="text" name="pengangkutan" id="pengangkutan" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md uppercase" placeholder="Nama Pengangkutan"/>
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label for="pic" className="block text-xs font-medium uppercase text-gray-500">Pic</label>
                        <input onChange={onInputChange} type="text" name="pic" id="pic" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md uppercase" placeholder="PIC"/>
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label for="contact" className="block text-xs font-medium uppercase text-gray-500">Contact<span className="text-red-600">*</span></label>
                        <input onChange={onInputChange} type="text" name="contact" id="contact" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md uppercase" placeholder="Contact"/>
                      </div>

                      <div className="col-span-9 sm:col-span-6">
                        <label for="address" className="block text-xs font-medium uppercase text-gray-500">Alamat Pengangkutan<span className="text-red-600">*</span></label>
                        <textarea onChange={onInputChange} type="text" name="address" id="address" rows='4' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md uppercase" placeholder='Alamat lengkap pengangkutan'/>
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label for="status" className="block text-xs font-medium uppercase text-gray-500">Status<span className="text-red-600">*</span></label>
                        <select onChange={onInputChange} id="status" name="status" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm uppercase">
                            <option value="">--Pilih Status--</option>
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
                    Submit
                  </button>
                  <button
                    className="text-gray-500 background-transparent hover:bg-gray-200 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
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
  )
}

export default PengangkutanModalForm