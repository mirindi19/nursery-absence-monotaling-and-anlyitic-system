import {
    ADD_CLASS_REQUEST,
    ADD_CLASS_SUCCESS,
    ADD_CLASS_FAILURE,
  } from "../types/addClassType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CLASS_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case ADD_CLASS_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case ADD_CLASS_FAILURE:
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