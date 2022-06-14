export const initialState = {
  filterby: [],
  search: "",
};

export const FilterReducerFun = (state, {type, payload }) => {
  switch (type) {
    // Filtering
    case "FILTERBY":
      return {
        ...state,
        filterby: state.filterby.includes(payload)
          ? state.filterby.filter((val) => val !== payload)
          : [...state.filterby, payload],
      };
    //Search
    case "SEARCH":
      return { ...state, search: payload };
    //clean_up
    case "CLEAR_FILTERS":
      return {
        filterby: [],
        search: "",
      };
    default:
      return state;
  }
};
