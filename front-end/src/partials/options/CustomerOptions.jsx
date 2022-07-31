import React from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { retrieveCustomers } from '../../store/actions/customer-action';

const CustomerOptions = ({ onChange = null }) => {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customers.list).map(customer => {
        return {
            value: customer.id,
            label: customer.customer
        }
    });

    const onInputChange = (val) => {
        onChange({
            target: {
                name: "customer",
                value: val.value
            }
        });
    }

    useEffect(() => {
        dispatch(retrieveCustomers());
    }, []);

  return (
    <Select
        onChange={onInputChange}
        type="text"
        id="customer"
        name="customer"
        className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        placeholder="Choose Customer"
        options={customers}
    />
  )
}

export default CustomerOptions