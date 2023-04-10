import {
    ADD_PARENT_REQUEST,
    ADD_PARENT_SUCCESS,
    ADD_PARENT_FAILURE,
  } from "../types/addParentType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PARENT_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case ADD_PARENT_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case ADD_PARENT_FAILURE:
        return {
          loading: false,
          details: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;