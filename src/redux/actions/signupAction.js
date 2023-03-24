import axios from "axios";
import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
  } from "../types/signupType";
  

export const signupAction = (telephone,email,password) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    const res = await axios.post(`http://localhost:8000/api/authentication/signup`,{
        telephone:telephone,
        email:email,
        password:password
    });
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(signupSuccess(data));
      
    }else{
        dispatch(signupFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(signupFailure(errorMessage));
    } else {
      dispatch(signupFailure("Network Error"));
    }
  }
};

export const signupRequest = () => {
  return {
    type:  SIGNUP_REQUEST,
  };
};

export const signupSuccess = (data) => {
  return {
    type:  SIGNUP_SUCCESS,
    payload: data,
  };
};
export const signupFailure = (error) => {
  return {
    type:  SIGNUP_FAILURE,
    payload: error,
  };
};