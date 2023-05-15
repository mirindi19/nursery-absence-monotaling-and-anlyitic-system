import {
    SENT_MESSAGE_TO_PARENT_REQUEST,
    SENT_MESSAGE_TO_PARENT_SUCCESS,
    SENT_MESSAGE_TO_PARENT_FAILURE,
  } from "../types/sentMessageToParentType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SENT_MESSAGE_TO_PARENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SENT_MESSAGE_TO_PARENT_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case SENT_MESSAGE_TO_PARENT_FAILURE:
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