import axios from "axios";
import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
  } from "../types/getUsersType";

export const getUsersAction = () => async (dispatch) => {
  try {
    dispatch(getUsersRequest());
    const res = await axios.get(`http://localhost:8000/api/users`);
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(getUsersSuccess(data.data));
      
    }else{
        dispatch(getUsersFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(getUsersFailure(errorMessage));
    } else {
      dispatch(getUsersFailure("Network Error"));
    }
  }
};

export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};

export const getUsersSuccess = (data) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: data,
  };
};
export const getUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error,
  };
};