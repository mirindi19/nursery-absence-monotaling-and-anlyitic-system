import {
    ADD_TEACHER_REQUEST,
    ADD_TEACHER_SUCCESS,
    ADD_TEACHER_FAILURE,
  } from "../types/addTeacherType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TEACHER_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case ADD_TEACHER_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case ADD_TEACHER_FAILURE:
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