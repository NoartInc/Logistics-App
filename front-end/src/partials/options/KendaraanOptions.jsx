import React, { useState } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { retrieveKendaraan } from '../../store/actions/kendaraan-action';

const KendaraanOptions = ({ onChange = null, value = null, disabled = false}) => {
    const dispatch = useDispatch();
    // const [selected, setSelected] = useState(null);
    const lists = useSelector((state) => state.kendaraans.list).map(item => {
        return {
            value: item.id,
            label: item.kendaraan
        }
    });

    const onInputChange = (val) => {
        onChange({
            target: {
                name: "kendaraan",
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
        dispatch(retrieveKendaraan());
    }, []);

  return (
    <Select
        onChange={onInputChange}
        type="text"
        id="kendaraan"
        name="kendaraan"
        className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        placeholder="Choose Kendaraan"
        // value={selected}
        options={lists}
        isDisabled={disabled}
    />
  )
}

export default KendaraanOptions