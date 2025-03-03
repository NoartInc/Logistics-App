import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SettingIcon from '../../icons/SettingIcon';
import ActionButton from '../../components/ActionButton';
import { deleteIssue, editIssue, retrieveIssue } from '../../store/actions/pengiriman-issue-action';

function MasterPengirimanIssueList() {
    const dispatch = useDispatch();
    const issues = useSelector(state => state?.issues?.list);

    const onDelete = (id) => {
        if (window.confirm("Yakin akan menghapus data ini ?")) {
            dispatch(deleteIssue(id))
                .then(result => {
                    window.alert(result?.message);
                })
                .catch(err => {
                    window.alert(JSON.stringify(err));
                })
        }
    }

    const onEdit = (id) => {
        dispatch(editIssue(id));
    }

    useEffect(() => {
        dispatch(retrieveIssue());
    }, []);

    return (
        <div className="w-full">
            {issues && issues?.length ? (
                <table className="table-auto w-full">
                    <thead>
                        <tr className="border-b border-b-gray-200">
                            <th className="text-left text-sm p-2">Tipe</th>
                            <th className="text-left text-sm p-2">Nama</th>
                            <th className="w-16 p-2">
                                <SettingIcon />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues?.map(item => (
                            <tr key={item?.id}>
                                <td className="text-left text-sm p-2">{item?.issueType}</td>
                                <td className="text-left text-sm p-2">{item?.issueName}</td>
                                <td className="p-2">
                                    <div className="flex justify-center items-center gap-2">
                                        <ActionButton type="delete" onClick={() => onDelete(item?.id)} />
                                        <ActionButton type="edit" onClick={() => onEdit(item?.id)} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="p-3 flex justify-center items-center rounded-lg border border-gray-200 py-12">
                    <h4>Belum ada data issue</h4>
                </div>
            )}
        </div>
    )
}

export default MasterPengirimanIssueList