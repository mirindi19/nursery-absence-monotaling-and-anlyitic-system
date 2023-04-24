import {
    UPLOAD_VIDEO_REQUEST,
    UPLOAD_VIDEO_SUCCESS,
    UPLOAD_VIDEO_FAILURE,
  } from "../types/uploadVideoType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPLOAD_VIDEO_REQUEST:
        return {
          ...state, 
          loading: true,
        };
      case UPLOAD_VIDEO_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case UPLOAD_VIDEO_FAILURE:
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