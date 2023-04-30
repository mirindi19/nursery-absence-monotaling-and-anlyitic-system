import {
    GET_STUDENT_BY_CLASSID_REQUEST,
    GET_STUDENT_BY_CLASSID_SUCCESS,
    GET_STUDENT_BY_CLASSID_FAILURE,
  } from "../types/getStudentsByClassIdType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_STUDENT_BY_CLASSID_REQUEST:
        return {
          ...state, //spredding
          loading: true,
        };
      case GET_STUDENT_BY_CLASSID_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case GET_STUDENT_BY_CLASSID_FAILURE:
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