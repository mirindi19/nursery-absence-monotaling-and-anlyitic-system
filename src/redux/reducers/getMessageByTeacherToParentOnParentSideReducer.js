import {
    GET_MESSAGEBY_TEACHER_ONPARENTSIDE_REQUEST,
    GET_MESSAGEBY_TEACHER_ONPARENTSIDE_SUCCESS,
    GET_MESSAGEBY_TEACHER_ONPARENTSIDE_FAILURE,
  } from "../types/getMessageByTeacherToParentOnParentSideType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MESSAGEBY_TEACHER_ONPARENTSIDE_REQUEST:
        return {
          ...state, //spredding
          loading: true,
        };
      case GET_MESSAGEBY_TEACHER_ONPARENTSIDE_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case GET_MESSAGEBY_TEACHER_ONPARENTSIDE_FAILURE:
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