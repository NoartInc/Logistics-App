import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InputGroupField from '../../components/InputGroupField';
import PrimaryButton from '../../components/PrimaryButton';
import { createIssue, updateIssue } from '../../store/actions/pengiriman-issue-action';

const initForm = {
    issueName: "",
    issueType: ""
};

const issueList = ["produksi","logistik"];

function MasterPengirimanIssueForm() {
    const dispatch = useDispatch();
    const editData = useSelector(state => state?.issues?.selectedData);
    const [loading, setLoading] = React.useState(false);
    const [form, setForm] = React.useState({ ...initForm });

    const onFieldChange = (event) => {
        const { name, value } = event.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const saveData = () => {
        if (form?.issueName === "" || form?.issueType === "") {
            window.alert("Mohon isi semua data dengan benar");
            return false;
        }
        if (form?.id) { // update existing
            setLoading(true);
            dispatch(updateIssue(form))
                .then(res => {
                    window.alert("Berhasil disimpan");
                    setForm({ ...initForm });
                })
                .catch(err => {
                    window.alert(JSON.stringify(err));
                })
                .finally(() => {
                    setLoading(false);
                })
        } else { // insert / create new
            setLoading(true);
            dispatch(createIssue(form))
                .then(res => {
                    window.alert("Berhasil ditambahkan");
                    setForm({ ...initForm });
                })
                .catch(err => {
                    window.alert(JSON.stringify(err));
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }

    React.useEffect(() => {
        if (editData != null) {
            setForm(editData);
        }
    }, [editData]);

    return (
        <div className="flex flex-col w-full">
            <InputGroupField
                label="Nama Issue"
                id="issueName"
                name="issueName"
                placeholder="Masukan nama Issue (mesin cetak rusak, dsb...)"
                value={form?.issueName}
                onChange={onFieldChange}
            />
            <div className="mb-3">
                <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
                    Pilih Jenis Issue
                </label>
                <select 
                    name="issueType"
                    id="issueType"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={form?.issueType}
                    onChange={onFieldChange}
                >
                    <option value="">- Pilih Jenis Issue -</option>
                    {issueList?.map(item => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <PrimaryButton
                text="Simpan"
                onClick={() => saveData()}
                loading={loading}
            />
        </div>
    )
}

export default MasterPengirimanIssueForm