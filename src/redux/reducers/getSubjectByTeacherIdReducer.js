import {
    GET_SUBJECTS_BY_TEACHERID_REQUEST,
    GET_SUBJECTS_BY_TEACHERID_SUCCESS,
    GET_SUBJECTS_BY_TEACHERID_FAILURE,
  } from "../types/getSubjectByTeacherIdType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SUBJECTS_BY_TEACHERID_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case GET_SUBJECTS_BY_TEACHERID_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case GET_SUBJECTS_BY_TEACHERID_FAILURE:
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