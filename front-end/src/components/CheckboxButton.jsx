import React from 'react'

const CheckboxButton = ({ onClick = () => null, children, selected = false }) => {
    const buttonClass = `p-3 transition-all duration-200 px-4 rounded-lg border border-gray-200 hover:border-blue-500 ${selected ? 'bg-blue-500 ring-2 ring-blue-300 text-white' : ''}`;
    return (
        <button
            type="button"
            onClick={() => onClick()}
            className={buttonClass}
        >
            {children}
        </button>
    )
}

export default CheckboxButton