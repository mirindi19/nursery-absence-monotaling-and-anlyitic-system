import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from "../types/loginType";

export const loginAction = (user, navigate) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const res = await axios.post(`http://localhost:8000/api/authentication/sign-in`, user);
    const { data } = await res;
  
    if(data.statusCode===200){
        console.log("response code:",data.statusCode)
        dispatch(loginSuccess(data.data));
        localStorage.setItem("x-access-token", data.data.token);
        localStorage.setItem("user-data", JSON.stringify(data.data));
navigate('/dashboard',{push:true})
    }else{
        dispatch(loginFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      console.log("error message",errorMessage);
      dispatch(loginFailure(errorMessage));
    } else {
      dispatch(loginFailure("Network Error"));
    }
  }
};

export const loginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

export const loginSuccess = (login) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: login,
  };
};
export const loginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: error,
  };
};