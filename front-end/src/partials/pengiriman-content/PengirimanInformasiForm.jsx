import React from 'react'
import { updateInformasi } from '../../store/actions/pengiriman-action';
import { useDispatch } from 'react-redux';

function PengirimanInformasiForm({ data }) {
  const [informasi, setInformasi] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

    const saveInformasi = () => {
        setLoading(true);
        const formData = {id: data?.id, informasi};
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
        setInformasi(data?.informasi ?? "");
    }, [data?.informasi]);


  return (
    <div className="flex flex-col gap-3">
         <div>
            <label
                htmlFor="informasi"
                className="block text-sm font-medium text-gray-700"
            >
                Informasi
            </label>
            <textarea
                onChange={(e) => setInformasi(e.target.value)}
                name="informasi"
                id="informasi"
                placeholder="Tambah informasi pengiriman"
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md resize-none"
                value={informasi}
                rows={8}
            ></textarea>  
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