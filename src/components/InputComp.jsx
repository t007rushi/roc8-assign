import React from "react";

export const InputComp = ({ data, filtersArr, checkBoxHandler }) => {
  return (
    <div className="flex items-center">
      <input
        id="default-checkbox"
        type="checkbox"
        checked={filtersArr.includes(data.title)}
        value={data.title}
        onChange={(e) => checkBoxHandler(e.target.value)}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {data.title}
      </label>
    </div>
  );
};
