import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePengangkutan, editPengangkutans } from '../../store/actions/pengangkutan-action';

function PengangkutanModalEditForm({ id = null }) {

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    // Ambil data yang mau di edit
    const currentData = useSelector(state => state.pengangkutans.selectedData);

  // jadi kalo mau di set ke masing2 form. tinggal buat state kayak di insert
  // nah ini biar enak, state di redux, copy kesini.
  // pakai useEffect aja
  // jadi setiap currentData'nya berubah. akan setForm
  // itu kan setEdit, jadikan setForm aja
  const [form, setForm] = useState({});

    const editData = (id) => {
      dispatch(editPengangkutans(id));
      setShowModal(true);
    }

    // setiap currentData berubah
    // setForm(currentData)
    useEffect(() => {
      setForm(currentData);
    }, [currentData]);

    const onInputChange = (e) => {
      const {name, value} = e.target;
      // di field baru 2 yang saya set value'nya. sisanya coba lanjutkan aja mas

      setForm(prevState => {
        return{
          ...prevState,
          [name]: value
        }
      });
    }

    const onSubmit = (e) => {
      e.preventDefault();
      // bawa data form yang udah di edit ke updatePENGANGKUTANs
      dispatch(updatePengangkutan(form))
      setShowModal(false);
    }


  return (
    <>
    {/* Ini ketika diklik harus ambil data sesuai ID plus buka modal'nya. */}
    {/* ini modalnya beda sama insert atau sama ? Tambah Data beda, => PengangkutanModalForm.js ok ok berarti gak perlu nambahin clearSelected. aman udah. tinggal coba edit. trus klik simpan. ada error gak. coba mas nya lanjutin yang value di set sesuai name'nya dari form, okay */}
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
                    Edit Pengangkutan
                  </h3>
                  {/* Ini tombol editnya bukan ? bukan.. itu tombol close X ,  tombol edit nya icon svg*/}
                  <button
                    className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="#808080" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
                {/*body*/}
                <div className="mt-5 md:mt-0 md:col-span-4">
                  
                    <div className="grid grid-cols-9 gap-9 px-4 py-4">

                      <div className="col-span-9 sm:col-span-3">
                        <label for="pengangkutan" className="block text-xs font-medium uppercase text-gray-500">Pengangkutan<span className="text-red-600">*</span></label>
                        <input 
                          onChange={onInputChange} 
                          type="text" 
                          name="pengangkutan" 
                          id="pengangkutan" 
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={form?.pengangkutan}
                        />
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label for="pic" className="block text-xs font-medium uppercase text-gray-500">Pic</label>
                        <input 
                          onChange={onInputChange} 
                          type="text" 
                          name="pic" 
                          id="pic" 
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          value={form?.pic}
                        />
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label for="contact" className="block text-xs font-medium uppercase text-gray-500">Contact<span className="text-red-600">*</span></label>
                        <input onChange={onInputChange} type="text" name="contact" id="contact" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" value={form?.contact}/>
                      </div>

                      <div className="col-span-9 sm:col-span-6">
                        <label for="address" className="block text-xs font-medium uppercase text-gray-500">Alamat Pengangkutan<span className="text-red-600">*</span></label>
                        <textarea onChange={onInputChange} type="text" name="address" id="address" rows='4' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder='Alamat lengkap pengangkutan' value={form?.address}/>
                      </div>

                      <div className="col-span-9 sm:col-span-3">
                        <label for="status" className="block text-xs font-medium uppercase text-gray-500">Status<span className="text-red-600">*</span></label>
                        <select onChange={onInputChange} id="status" name="status" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" value={form?.status}>
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
  )
}

export default PengangkutanModalEditForm