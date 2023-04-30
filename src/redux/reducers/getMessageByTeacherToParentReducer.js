import {
    GET_MESSAGEBY_TEACHER_REQUEST,
    GET_MESSAGEBY_TEACHER_SUCCESS,
    GET_MESSAGEBY_TEACHER_FAILURE,
  } from "../types/getMessageByTeacherToParentType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MESSAGEBY_TEACHER_REQUEST:
        return {
          ...state, //spredding
          loading: true,
        };
      case GET_MESSAGEBY_TEACHER_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case GET_MESSAGEBY_TEACHER_FAILURE:
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