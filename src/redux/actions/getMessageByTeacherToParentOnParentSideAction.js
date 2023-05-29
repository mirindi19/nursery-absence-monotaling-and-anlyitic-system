import axios from "axios";
import {
    GET_MESSAGEBY_TEACHER_ONPARENTSIDE_REQUEST,
    GET_MESSAGEBY_TEACHER_ONPARENTSIDE_SUCCESS,
    GET_MESSAGEBY_TEACHER_ONPARENTSIDE_FAILURE,
  } from "../types/getMessageByTeacherToParentOnParentSideType";
  

export const getMessageByTeacherToParentOnParentSideAction = () => async (dispatch) => {
  try {
    dispatch(getMessageByTeacherToParentOnParentSideRequest());
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
    const { data }= await axios.get(`http://localhost:8000/api/messages/message-sentby-teacher-parent-parentside`, {
      headers: headers,
    });

    if(data.statusCode===200){
        dispatch(getMessageByTeacherToParentOnParentSideSuccess(data.data));
      
    }else{
        dispatch(getMessageByTeacherToParentOnParentSideFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(getMessageByTeacherToParentOnParentSideFailure(errorMessage));
    } else {
      dispatch(getMessageByTeacherToParentOnParentSideFailure("Network Error"));
    }
  }
};

export const getMessageByTeacherToParentOnParentSideRequest = () => {
  return {
    type: GET_MESSAGEBY_TEACHER_ONPARENTSIDE_REQUEST,
  };
};

export const getMessageByTeacherToParentOnParentSideSuccess = (data) => {
  return {
    type: GET_MESSAGEBY_TEACHER_ONPARENTSIDE_SUCCESS,
    payload: data,
  };
};
export const getMessageByTeacherToParentOnParentSideFailure = (error) => {
  return {
    type: GET_MESSAGEBY_TEACHER_ONPARENTSIDE_FAILURE,
    payload: error,
  };
};