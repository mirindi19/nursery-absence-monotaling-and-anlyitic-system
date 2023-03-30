import {
    ADD_STUDENT_REQUEST,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_FAILURE,
  } from "../types/addStudentType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_STUDENT_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case ADD_STUDENT_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case ADD_STUDENT_FAILURE:
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