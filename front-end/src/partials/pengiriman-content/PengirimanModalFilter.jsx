import React from 'react'
import FilterIcon from '../../icons/FilterIcon';
import CloseIcon from '../../icons/CloseIcon';
import { useSelector } from 'react-redux'
import CheckboxButton from '../../components/CheckboxButton';

const status = ["diproses", "dicetak", "dimuat", "termuat", "dikirim", "terkirim", "pending", "cancel"];
const initFilters = {
    status: "",
    tanggalOrderStart: "",
    tanggalOrderEnd: "",
    progressTime: []
};

const PengirimanModalFilter = ({ applyFilter = () => null }) => {
    const [showModal, setShowModal] = React.useState(false);
    const { filters: storedFilter } = useSelector(state => state?.pengirimans);
    const gradings = useSelector(state => state?.gradings?.list);
    const [filters, setFilters] = React.useState({ ...initFilters });

    const submitFilter = () => {
        setShowModal(false);
        applyFilter(filters);
    }

    const selectGrade = (value) => {
        let selectedGrade = filters?.progressTime ?? [];
        if (selectedGrade) {
            if (!selectedGrade.includes(value)) {
                selectedGrade.push(value);
            } else {
                let toRemove = selectedGrade.indexOf(value);
                if (toRemove !== -1) {
                    selectedGrade.splice(toRemove, 1);
                }
            }
            onFilterChange({
                target: {
                    name: "progressTime",
                    value: selectedGrade
                }
            })
        }
    }

    const isGradeSelected = (value) => {
        return filters?.progressTime?.includes(value);
    }

    const onFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters(prevState => ({
            ...prevState,
            [name]: value || ""
        }));
    }

    React.useEffect(() => {
        if (storedFilter) {
            setFilters(storedFilter);
        }
    }, [storedFilter]);

    return (
        <>
            <button
                type="button"
                onClick={() => setShowModal(true)}
                className="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                <FilterIcon />
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-sm md:max-w-4xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-lg font-semibold mr-8">
                                        Filter Data Pengiriman
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <CloseIcon />
                                    </button>
                                </div>

                                {/* body */}
                                <div className="flex flex-col items-start gap-y-3 px-4 py-4">
                                    <div className="w-full">
                                        <label>By Status</label>
                                        <select
                                            onChange={onFilterChange}
                                            type="text"
                                            id="status"
                                            name="status"
                                            value={filters?.status}
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        >
                                            <option value="">- Semua Status -</option>
                                            {status?.map(item => (
                                                <option key={item} value={item}>{item?.toUpperCase()}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-full">
                                        <label>By Tanggal Order</label>
                                        <div className="flex items-center gap-x-3">
                                            <div>
                                                <input
                                                    onChange={onFilterChange}
                                                    type="date"
                                                    name="tanggalOrderStart"
                                                    id="tanggalOrderStart"
                                                    placeholder="DARI tNAGGAL"
                                                    value={filters?.tanggalOrderStart}
                                                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    max={filters?.tanggalOrderEnd}
                                                />
                                            </div>
                                            <span>to</span>
                                            <div>
                                                <input
                                                    onChange={onFilterChange}
                                                    type="date"
                                                    name="tanggalOrderEnd"
                                                    id="tanggalOrderEnd"
                                                    placeholder="Tanggal Order"
                                                    value={filters?.tanggalOrderEnd}
                                                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    min={filters?.tanggalOrderStart}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col gap-y-2">
                                        <label>By Lead Time (Grading Name)</label>
                                        {/* <select
                                            onChange={onFilterChange}
                                            type="text"
                                            id="progressTime"
                                            name="progressTime"
                                            value={filters?.progressTime || ""}
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        >
                                            <option value="">- Semua Waktu -</option>
                                            {gradings?.map(item => (
                                                <option key={item?.id} value={item?.gradeValue}>{item?.gradeName}</option>
                                            ))}
                                        </select> */}
                                        <div className="flex flex-wrap gap-2 max-w-sm">
                                            {gradings?.map(item => (
                                                <CheckboxButton
                                                    key={item?.id}
                                                    onClick={() => selectGrade(item?.gradeValue)}
                                                    selected={isGradeSelected(item?.gradeValue)}
                                                >
                                                    {item?.gradeName}
                                                </CheckboxButton>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-center p-3 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-gray-500 background-transparent hover:bg-gray-200 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 hover:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={() => submitFilter()}
                                    >
                                        Terapkan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default PengirimanModalFilter