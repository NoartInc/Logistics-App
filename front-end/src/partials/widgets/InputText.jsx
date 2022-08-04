import React from "react";

const InputText = ({ label, onInputChange, name, id, type, placeholder, inputType = "text", value }) => {

    if (inputType === "textarea") {
            return (
                <>
                    <label
                      for={id}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {label}
                    </label>
                    <textarea
                      onChange={onInputChange}
                      name={name}
                      id={id}
                      rows="4"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder={placeholder}
                      value={value}
                    />
                </>
            )
    }

  return (
      <>
        <label
            for={id}
            className="block text-sm font-medium text-gray-700"
        >
            {label}
        </label>
        <input
            onChange={onInputChange}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </>
  );
};

export default InputText;
