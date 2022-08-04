import React, { useEffect, useState } from "react";
import moment from "moment";

function DateRangePickerExport() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    setStartDate(moment().format("YYYY-MM-DD"))
    setEndDate(moment().add(1, 'days').format("YYYY-MM-DD"));
  }, []);

  return (
    <div className="flex items-center px-4 py-4">
      <div className="relative">
        <input
          name="start"
          type="date"
          value={startDate}
          id="dateRangePickerId"
          onChange={(e) => setStartDate(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
          placeholder="Select date start"
        />
      </div>
      <span className="mx-4 text-gray-500">to</span>
      <div className="relative">
        
        <input
          name="end"
          type="date"
          value={endDate}
          min={startDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
          placeholder="Select date end"
        />
      </div>
    </div>
  );
}


export default DateRangePickerExport;
