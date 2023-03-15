import {
    GET_STUDENTS_REQUEST,
    GET_STUDENTS_SUCCESS,
    GET_STUDENTS_FAILURE,
  } from "../types/getStudentsType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_STUDENTS_REQUEST:
        return {
          ...state, //spredding
          loading: true,
        };
      case GET_STUDENTS_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case GET_STUDENTS_FAILURE:
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