import {
    GET_PARENTS_REQUEST,
    GET_PARENTS_SUCCESS,
    GET_PARENTS_FAILURE,
  } from "../types/getParentsType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PARENTS_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case GET_PARENTS_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case GET_PARENTS_FAILURE:
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