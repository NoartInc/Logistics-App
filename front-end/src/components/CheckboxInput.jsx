import React from "react";

function CheckboxInput({ value, onChange = () => null }) {
  let checkRef = React.useRef(null);
  const [checked, setChecked] = React.useState(false);

  const onChecked = () => {
    setChecked(!checked);
    checkRef.current.checked = !checked;
    onChange(!checked);
  };

  React.useEffect(() => {
    setChecked(value);
    checkRef.current.checked = value;
  }, [value]);

  return (
    <div
      className={`p-px rounded border border-gray-300 cursor-pointer hover:border-blue-400 w-6 h-6 flex justify-center items-center ${
        checked ? "border-blue-500 bg-blue-500" : ""
      }`}
      onClick={() => onChecked()}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 font-bold text-white"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />{" "}
        </svg>
      )}
      <input
        ref={checkRef}
        type="checkbox"
        className="appearance-none hidden"
      />
    </div>
  );
}

export default CheckboxInput;
