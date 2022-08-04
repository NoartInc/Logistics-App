import Select from 'react-select'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { retrieveUsers } from '../../store/actions/user-action';

const SalesOptions = ({ onChange=null, value=null }) => {
    const dispatch = useDispatch();
    const lists = useSelector((state) => state.users.list).filter(user => user.role === 'sales').map(item => {
        return {
            value: item.id,
            label: item.fullName
        }
    })

    const onInputChange = (val) => {
        onChange({
            target: {
                name: "sales",
                value: val.value
            }
        })
    }

    useEffect(() => {
        dispatch(retrieveUsers())
    }, []);

  return (
    <Select
        onChange={onInputChange}
        type="text"
        id="sales"
        name="sales"
        className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        placeholder="Choose a sales"
        options={lists}
        isClearable={true}
    />
  )
}

export default SalesOptions