import axios from "axios";
import {
    GET_MESSAGEBY_TEACHER_REQUEST,
    GET_MESSAGEBY_TEACHER_SUCCESS,
    GET_MESSAGEBY_TEACHER_FAILURE,
  } from "../types/getMessageByteacherType";
  

export const getMessageByteacherAction = () => async (dispatch) => {
  try {
    dispatch(getMessageByteacherRequest());
    const token = await localStorage.getItem("x-access-token");
    let headers;
    if (token) {
      headers = {
        "Content-Type": "application/json",
        token: `${token}`,
      };
    } else {
      headers = {
        "Content-Type": "application/json",
      };
    }
    const { data }= await axios.get(`http://localhost:8000/api/messages`, {
      headers: headers,
    });

    if(data.statusCode===200){
        dispatch(getMessageByteacherSuccess(data.data));
      
    }else{
        dispatch(getMessageByteacherFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(getMessageByteacherFailure(errorMessage));
    } else {
      dispatch(getMessageByteacherFailure("Network Error"));
    }
  }
};

export const getMessageByteacherRequest = () => {
  return {
    type: GET_MESSAGEBY_TEACHER_REQUEST,
  };
};

export const getMessageByteacherSuccess = (data) => {
  return {
    type: GET_MESSAGEBY_TEACHER_SUCCESS,
    payload: data,
  };
};
export const getMessageByteacherFailure = (error) => {
  return {
    type: GET_MESSAGEBY_TEACHER_FAILURE,
    payload: error,
  };
};