import React, { useState } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { retrievePengangkutans } from '../../store/actions/pengangkutan-action';

const PengangkutanOptions = ({ onChange = null, value = null }) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(null);
    const lists = useSelector((state) => state.pengangkutans.list).map(item => {
        return {
            value: item.id,
            label: item.pengangkutan
        }
    });

    const onInputChange = (val) => {
        onChange({
            target: {
                name: "pengangkutan",
                value: val.value
            }
        });
    }

    const setSelectedValue = () => {
        const currentValue = lists.find(item => item.value === value);
        if (currentValue) {
            setSelected(currentValue);
        } else {
            setSelected(null);
        }
    }

    useEffect(() => {
        setSelectedValue();
    }, [value]);

    useEffect(() => {
        dispatch(retrievePengangkutans());
    }, []);

  return (
    <Select
        onChange={onInputChange}
        type="text"
        id="pengangkutan"
        name="pengangkutan"
        value={selected}
        className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        placeholder="Choose Pengangkutan"
        options={lists}
        isClearable={true}
    />
  )
}

export default PengangkutanOptions