import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
  } from "../types/getUsersType";
  
  const initialState = {
    loading: false,
    details: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USERS_REQUEST:
        return {
          ...state, //spredding
          loading: true,
        };
      case GET_USERS_SUCCESS:
        return {
          loading: false,
          details: action.payload,
          error: "",
        };
      case GET_USERS_FAILURE:
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