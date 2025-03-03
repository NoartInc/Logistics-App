import React from 'react'
import { updateInformasi } from '../../store/actions/pengiriman-action';
import { useDispatch, useSelector } from 'react-redux';

function PengirimanInformasiForm({ data }) {
    const [productionIssue, setProductionIssue] = React.useState(0);
    const [logisticIssue, setLogisticIssue] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const issues = useSelector(state => state?.issues?.list);
    const dispatch = useDispatch();

    const saveInformasi = () => {
        setLoading(true);
        const formData = { id: data?.id, productionIssue, logisticIssue };
        dispatch(updateInformasi(formData))
            .then(result => {
                window.alert(result?.message);
            })
            .catch(err => {
                window.alert(JSON.stringify(err));
            })
            .finally(() => {
                setLoading(false);
            })
    }

    React.useEffect(() => {
        setProductionIssue(data?.productionIssue ?? 0);
        setLogisticIssue(data?.logisticIssue ?? 0);
    }, [data]);


    return (
        <div className="flex flex-col gap-3">
            <div className="mb-3">
                <label
                    htmlFor="productionIssue"
                    className="block text-sm font-medium text-gray-700"
                >
                    Isu Produksi
                </label>
                <select
                    name="productionIssue"
                    id="productionIssue"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={productionIssue}
                    onChange={(event) => setProductionIssue(event.target.value)}
                >
                    <option value="0">- Pilih Salah Satu -</option>
                    {issues?.filter(item => item?.issueType === "produksi")?.map(item => (
                        <option key={item?.id} value={item?.id}>
                            {item?.issueName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label
                    htmlFor="logisticIssue"
                    className="block text-sm font-medium text-gray-700"
                >
                    Isu Logistik
                </label>
                <select
                    name="logisticIssue"
                    id="logisticIssue"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={logisticIssue}
                    onChange={(event) => setLogisticIssue(event.target.value)}
                >
                    <option value="0">- Pilih Salah Satu -</option>
                    {issues?.filter(item => item?.issueType === "logistik")?.map(item => (
                        <option key={item?.id} value={item?.id}>
                            {item?.issueName}
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="button"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-200"
                onClick={() => saveInformasi()}
                disabled={loading}
            >
                {loading ? "Memproses" : "Simpan"}
            </button>
        </div>
    )
}

export default PengirimanInformasiForm