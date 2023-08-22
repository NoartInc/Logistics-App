import React, { useState } from 'react'
import Select from 'react-select'
// import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { retrieveTelis } from '../../store/actions/teli-action';
import http from '../../../http-common';

const ProduksiOptions = ({ onChange = null, value = null }) => {
    // const dispatch = useDispatch();
    const [selected, setSelected] = useState(null);
    // const lists = useSelector((state) => state.telis.list).map(item => {
    //     return {
    //         value: item.id,
    //         label: item.fullName
    //     }
    // });

    const [list, setList] = useState([])
    const [search,setSearch] = useState('')

    const getList = () =>{
        http.get('/produksi', {
            params: {
                // limit: 15,
                // search: search
            }
        }).then(result => {
            setList(result.data?.map(item => ({
                value: item.id,
                label: item.fullName
            })))
        })
    }

    const onInputChange = (val) => {
        onChange({
            target: {
                name: "produksiId",
                value: val.value
            }
        });
    }

    const setSelectedValue = () => {
        const currentValue = list.find(item => item.value === value);
        if (currentValue) {
            setSelected(currentValue);
        } else {
            setSelected(null);
        }
    }

    // const setSelectedValue = () => {
    //     const currentValue = lists.find(item => item.value === value);
    //     if (currentValue) {
    //         setSelected(currentValue);
    //     } else {
    //         setSelected(null);
    //     }
    // }

    useEffect(() => {
        setSelectedValue();
    }, [value]);

    useEffect(() => {
        // dispatch(retrieveTelis());
        getList()
    }, [search]);

  return (
    <Select
        // onInputChange={(text) => setSearch(text)}
        onChange={onInputChange}
        type="text"
        id="produksiId"
        name="produksiId"
        value={selected}
        className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        placeholder="Choose Produksi"
        options={list}
        defaultValue={list['']}
    />
  )
}

export default ProduksiOptions