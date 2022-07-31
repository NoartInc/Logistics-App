import React, { useState } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { retrieveUsers } from '../../store/actions/user-action';

const DriverOptions = ({ onChange = null, value = null, disabled = false, clearable = true }) => {
    const dispatch = useDispatch();
    // const [selected, setSelected] = useState(null);
    const lists = useSelector((state) => state.users.list).filter(user => user.role === 'driver').map(item => {
        return {
            value: item.id,
            label: item.fullName
        }
    });

    const onInputChange = (val) => {
        onChange({
            target: {
                name: "driver",
                value: val.value
            }
        });
    }

    // const setSelectedValue = () => {
    //     const currentValue = lists.find(item => item.value === value);
    //     if (currentValue) {
    //         setSelected(currentValue);
    //     } else {
    //         setSelected(null);
    //     }
    // }

    // useEffect(() => {
    //     setSelectedValue();
    // }, [value]);

    useEffect(() => {
        dispatch(retrieveUsers());
    }, []);

  return (
    <Select
        onChange={onInputChange}
        type="text"
        id="driver"
        name="driver"
        className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        placeholder="Choose Driver"
        options={lists}
        isDisabled={disabled}
        isClearable={clearable}
        defaultValue={true}
    />
  )
}

export default DriverOptions