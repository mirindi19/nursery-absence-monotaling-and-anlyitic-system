import {
    GET_MESSAGESENTBY_TEACHER_REQUEST,
    GET_MESSAGESENTBY_TEACHER_SUCCESS,
    GET_MESSAGESENTBY_TEACHER_FAILURE,
  } from "../types/getMessagesSentByTeacherType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MESSAGESENTBY_TEACHER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_MESSAGESENTBY_TEACHER_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case GET_MESSAGESENTBY_TEACHER_FAILURE:
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