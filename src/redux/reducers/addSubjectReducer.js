import {
    ADD_SUBJECT_REQUEST,
    ADD_SUBJECT_SUCCESS,
    ADD_SUBJECT_FAILURE,
  } from "../types/addSubjectType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SUBJECT_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case ADD_SUBJECT_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case ADD_SUBJECT_FAILURE:
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