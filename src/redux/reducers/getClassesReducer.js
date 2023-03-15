import {
    GET_CLASSES_REQUEST,
    GET_CLASSES_SUCCESS,
    GET_CLASSES_FAILURE,
  } from "../types/getClassesType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CLASSES_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case GET_CLASSES_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case GET_CLASSES_FAILURE:
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