import React from 'react'
import Datepicker from '../actions/Datepicker'



function PengirimanInputForm() {

  

  return (
    <div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      {/* <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p className="mt-1 text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div> */}
      <div className="mt-5 md:mt-0 md:col-span-4">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
            <header className="px-0 mt-2 mb-6">
              <h2 className="font-semibold text-slate-800 uppercase">Pengiriman Baru</h2>
            </header>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label for="customer" className="block text-sm font-medium text-gray-700">Customer</label>
                  <select id="customer" name="customer" autocomplete="customer" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                    <option>Customer 1</option>
                    <option>Customer 2</option>
                    <option>Customer 3</option>
                  </select>
                </div>
                
                <div className="col-span-6 sm:col-span-3">
                  <label for="date" className="block text-sm font-medium text-gray-700">Pilih Tanggal</label>
                  <Datepicker />
                </div>

  
                <div className="col-span-6 sm:col-span-3">
                  <label for="no_surat_jalan" className="block text-sm font-medium text-gray-700">Surat Jalan</label>
                  <input type="text" name="no_surat_jalan" id="no_surat_jalan" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <div class="form-check form-check-inline mr-3">
                    <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label inline-block text-sm font-medium text-gray-500" for="inlineRadio10">Toko</label>
                  </div>
                  <div class="form-check form-check-inline mr-3">
                    <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label inline-block text-sm font-medium text-gray-500" for="inlineRadio20">PO</label>
                  </div>
                  <div class="form-check form-check-inline mr-3">
                    <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label inline-block text-sm font-medium text-gray-500" for="inlineRadio20">Lain-lain</label>
                  </div>
                </div>
  
                <div className="col-span-6 sm:col-span-3">
                  <label for="tujuan" className="block text-sm font-medium text-gray-700">Tujuan</label>
                  <input type="text" name="tujuan" id="tujuan" autocomplete="customer" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label for="pengangkutan" className="block text-sm font-medium text-gray-700">Pengangkutan</label>
                  <select id="pengangkutan" name="pengangkutan" autocomplete="pengangkutan" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Pengangkutan 1</option>
                    <option>pengangkutan 2</option>
                    <option>pengangkutan 3</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-5">
                  <label for="alamat" className="block text-sm font-medium text-gray-700">Alamat Pengiriman</label>
                  <textarea type="text" name="alamat" id="alamat" autocomplete='customer' className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder='Alamat lengkap pengiriman'/>
                </div>
  
                <div className="col-span-6 sm:col-span-3">
                  <label for="total_berat" className="block text-sm font-medium text-gray-700">Total Berat</label>
                  <input type="text" name="total_berat" id="total_berat" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>

                <div className="col-span-6 sm:col-span-3 mt-3">
                  <div className="form-check form-check-inline mr-3">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label className="form-check-label inline-block text-sm font-medium text-gray-500" for="inlineRadio10">Diantar</label>
                  </div>
                  <div className="form-check form-check-inline mr-3">
                    <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label className="form-check-label inline-block text-sm font-medium text-gray-500" for="inlineRadio20">Dijemput</label>
                  </div>
                </div>
                
                <div className="col-span-6 sm:col-span-3">
                  <label for="Driver" className="block text-sm font-medium text-gray-700">Driver</label>
                  <select id="Driver" name="Driver" autocomplete="Driver" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Driver 1</option>
                    <option>Driver 2</option>
                    <option>Driver 3</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label for="Kendaraan" className="block text-sm font-medium text-gray-700">Kendaraan</label>
                  <select id="Kendaraan" name="Kendaraan" autocomplete="Kendaraan" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Kendaraan 1</option>
                    <option>Kendaraan 2</option>
                    <option>Kendaraan 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 space-x-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
              <button type="cancel" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default PengirimanInputForm