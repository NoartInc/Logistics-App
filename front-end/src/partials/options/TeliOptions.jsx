import React, { useState } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { retrieveTelis } from '../../store/actions/teli-action';

const TeliOptions = ({ onChange = null, value = null }) => {
    const dispatch = useDispatch();
    // const [selected, setSelected] = useState(null);
    const lists = useSelector((state) => state.telis.list).map(item => {
        return {
            value: item.id,
            label: item.fullName
        }
    });

    const onInputChange = (val) => {
        onChange({
            target: {
                name: "teli",
                value: val
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
        dispatch(retrieveTelis());
    }, []);

  return (
    <Select
        onChange={onInputChange}
        type="text"
        id="teli"
        name="teli"
        // value={selected}
        className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        placeholder="Choose Teli"
        options={lists}
        defaultValue={lists['']}isMulti
    />
  )
}

export default TeliOptions