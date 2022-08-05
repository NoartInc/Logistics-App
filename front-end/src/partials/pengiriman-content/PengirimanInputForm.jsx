import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPengiriman } from "../../store/actions/pengiriman-action";
import CustomerOptions from "../../partials/options/CustomerOptions";
import PengangkutanOptions from "../options/PengangkutanOptions";
import DriverOptions from "../options/DriverOptions";
import KendaraanOptions from "../options/KendaraanOptions";
import InputText from "../widgets/InputText";

function PengirimanInputForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tipePengiriman, setTipePengiriman] = useState(null);
  const [pickUp, setPickUp] = useState(null);

  const customers = useSelector((state) => state.customers.list);
  const pengangkutans = useSelector((state) => state.pengangkutans.list);

  const [form, setForm] = useState({
    customer: "",
    suratJalan: "",
    tujuan: "",
    pengangkutan: "",
    address: "",
    note: "",
    tonase: "",
    driver: "",
    kendaraan: "",
    status: "",
  });

  const getAddressValue = () => {
    let selectedAddress = "";
    if (tipePengiriman === "toko") {
      setForm((prevState) => ({
        ...prevState,
        pengangkutan: "",
      }));
      if (form.customer) {
        selectedAddress = customers.find(
          (item) => item.id === form.customer
        ).address;
      }
    } else if (tipePengiriman === "po") {
      if (form.pengangkutan) {
        selectedAddress = pengangkutans.find(
          (item) => item.id === form.pengangkutan
        ).address;
      }
    }

    setForm((prevState) => ({
      ...prevState,
      address: selectedAddress,
    }));
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
    dispatch(createPengiriman(form));
    setTimeout(() => {
      navigate("/listpengiriman");
    }, 1000);
  };

  useEffect(() => {}, [form]);

  useEffect(() => {
    getAddressValue();
  }, [tipePengiriman, form.customer, form.pengangkutan]);

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-4">
          <form onSubmit={onSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <header className="px-0 mt-2 mb-6">
                  <h2 className="font-semibold text-slate-800 uppercase">
                    Pengiriman Baru
                  </h2>
                </header>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="customer"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Customer
                    </label>
                    <CustomerOptions onChange={onInputChange} />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    {/* <InputText
                      label="Surat Jalan"
                      onChange={onInputChange}
                      name="suratJalan"
                      id="suratJalan"
                      placeholder="No Surat Jalan"
                      type="text"
                      value={form?.suratJalan}
                    /> */}
                    <label
                      for="suratJalan"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Surat Jalan
                    </label>
                    <input
                      onChange={onInputChange}
                      type="text"
                      name="suratJalan"
                      id="suratJalan"
                      placeholder="No Surat Jalan"
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      value={form?.suratJalan}
                    />
                  </div>

                  {/* <div className="col-span-6 sm:col-span-3">
                    <label
                      for="tujuan"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tujuan
                    </label>
                    <input
                      onChange={onInputChange}
                      type="text"
                      name="tujuan"
                      id="tujuan"
                      placeholder="Kota Tujuan"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div> */}

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="pengangkutan"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pengangkutan
                    </label>
                    <PengangkutanOptions
                      onChange={onInputChange}
                      value={form.pengangkutan}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <div className="form-check form-check-inline mr-3">
                      <input
                        onChange={(e) => setTipePengiriman(e.target.value)}
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="tipetoko"
                        id="tipeToko"
                        value="toko"
                        disabled={form.customer === "" ? true : false}
                      />
                      <label
                        className="form-check-label inline-block text-sm font-medium text-gray-500"
                        htmlFor="tipeToko"
                      >
                        Toko
                      </label>
                    </div>
                    <div className="form-check form-check-inline mr-3">
                      <input
                        onChange={(e) => setTipePengiriman(e.target.value)}
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="tipetoko"
                        id="tipePO"
                        value="po"
                        disabled={form.customer === "" ? true : false}
                      />
                      <label
                        className="form-check-label inline-block text-sm font-medium text-gray-500"
                        htmlFor="tipePO"
                      >
                        PO
                      </label>
                    </div>
                    <div className="form-check form-check-inline mr-3">
                      <input
                        onChange={(e) => setTipePengiriman(e.target.value)}
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="tipetoko"
                        id="tipeLainnya"
                        value="lain-lain"
                        disabled={form.customer === "" ? true : false}
                      />
                      <label
                        className="form-check-label inline-block text-sm font-medium text-gray-500"
                        htmlFor="tipeLainnya"
                      >
                        Lain-lain
                      </label>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-5">
                    {/* <InputText
                      inputType="textarea"
                      label="Alamat Pengiriman"
                      onChange={onInputChange}
                      name="address"
                      id="address"
                      placeholder="Alamat Pengiriman"
                      type="text"
                      value={form?.address}
                    /> */}
                    <label
                      for="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Alamat Pengiriman
                    </label>
                    <textarea
                      onChange={onInputChange}
                      type="text"
                      name="address"
                      id="address"
                      rows="4"
                      placeholder="Alamat Lengkap Pengiriman"
                      value={form?.address}
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-5">
                    <label
                      for="note"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Note Pengiriman
                    </label>
                    <textarea
                      onChange={onInputChange}
                      type="text"
                      name="note"
                      id="note"
                      rows="4"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Note Pengiriman"
                      value={form.note}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="tonase"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Total Berat
                    </label>
                    <input
                      onChange={onInputChange}
                      type="text"
                      name="tonase"
                      id="tonase"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Total Berat dalam Ton"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 mt-3">
                    <div className="form-check form-check-inline mr-3">
                      <input
                        onChange={(e) => setPickUp(false)}
                        className="form-check-input2 form-check-input2 appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="tipePickUp"
                        value="diantar"
                      />
                      <label
                        className="form-check-label inline-block text-sm font-medium text-gray-500"
                        for="inlineRadio10"
                      >
                        Diantar
                      </label>
                    </div>
                    <div className="form-check form-check-inline mr-3">
                      <input
                        onChange={(e) => setPickUp(true)}
                        className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="tipePickUp"
                        value="dijemput"
                      />
                      <label
                        className="form-check-label inline-block text-sm font-medium text-gray-500"
                        for="inlineRadio20"
                      >
                        Dijemput
                      </label>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="driver"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Driver
                    </label>
                    <DriverOptions onChange={onInputChange} disabled={pickUp} />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="kendaraan"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Kendaraan
                    </label>
                    <KendaraanOptions
                      onChange={onInputChange}
                      disabled={pickUp}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-4 space-x-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
                <button
                  type="cancel"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PengirimanInputForm;
