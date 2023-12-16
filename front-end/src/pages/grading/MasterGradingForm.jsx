import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InputGroupField from '../../components/InputGroupField';
import PrimaryButton from '../../components/PrimaryButton';
import { createGrading, updateGrading } from '../../store/actions/grading-action';

const initForm = {
    "gradeName": "",
    "gradeValue": 0,
    "gradePoin": 0
};

function MasterGradingForm() {
    const dispatch = useDispatch();
    const editData = useSelector(state => state?.gradings?.selectedData);
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
        if (form?.gradeName === "" || form?.gradeValue === "" || form?.gradePoin === "") {
            window.alert("Mohon isi semua data dengan benar");
            return false;
        }
        if (form?.id) { // update existing
            setLoading(true);
            dispatch(updateGrading(form))
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
            dispatch(createGrading(form))
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
                label="Nama Grade"
                id="gradeName"
                name="gradeName"
                placeholder="Masukan nama Grade (H+1, H+2, dsb.)"
                value={form?.gradeName}
                onChange={onFieldChange}
            />
            <div className="flex flex-col md:flex-row gap-x-3">
                <InputGroupField
                    label="Hari"
                    id="gradeValue"
                    name="gradeValue"
                    type="number"
                    placeholder="Masukan angka hari untuk grade"
                    value={form?.gradeValue}
                    onChange={onFieldChange}
                />
                <InputGroupField
                    label="Poin"
                    id="gradePoin"
                    name="gradePoin"
                    type="number"
                    placeholder="Masukan angka untuk poin grade"
                    value={form?.gradePoin}
                    onChange={onFieldChange}
                />
            </div>
            <PrimaryButton
                text="Simpan"
                onClick={() => saveData()}
                loading={loading}
            />
        </div>
    )
}

export default MasterGradingForm