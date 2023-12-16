import React from 'react'

function PrimaryButton({ type = "button", text = "Button Text", onClick = () => null, loading = false, disabled = false }) {
    const buttonClass = `inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-200`;
    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={loading || disabled}
        >
            {text}
        </button>
    )
}

export default PrimaryButton