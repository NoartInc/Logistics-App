import React from 'react'

function InputGroupField({ 
    label = "Input Label", 
    id = "input-id", 
    name = "input_name", 
    value = "", onChange = () => null, 
    type = "text", 
    placeholder = "Input placeholder"
}) {
    const inputClass = `mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`;
    return (
        <div className="mb-3">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <input
                onChange={onChange}
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className={inputClass}
                value={value}
            />
        </div>
    )
}

export default InputGroupField