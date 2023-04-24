import {
    UPLOAD_FILE_REQUEST,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAILURE,
  } from "../types/uploadFileType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPLOAD_FILE_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case UPLOAD_FILE_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case UPLOAD_FILE_FAILURE:
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