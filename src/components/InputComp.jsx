import React from "react";
import { useFilter } from "../context/filter-context";

export const InputComp = ({ title }) => {
  const {dispactherforfilter,filterstate} = useFilter();
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={filterstate.filterby.includes(title)}
        value={title}
        onChange={(e) => dispactherforfilter({type:"FILTERBY",payload:e.target.value})}
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {title}
      </label>
    </div>
  );
};
