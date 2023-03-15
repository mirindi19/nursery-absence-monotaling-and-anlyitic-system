import {
    GET_TEACHERS_REQUEST,
    GET_TEACHERS_SUCCESS,
    GET_TEACHERS_FAILURE,
  } from "../types/teacherListType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TEACHERS_REQUEST:
        return {
          ...state, //spredding
          loading: true,
        };
      case GET_TEACHERS_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case GET_TEACHERS_FAILURE:
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