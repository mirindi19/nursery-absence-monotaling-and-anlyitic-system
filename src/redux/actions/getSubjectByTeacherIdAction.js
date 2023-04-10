import axios from "axios";
import {
    GET_SUBJECTS_BY_TEACHERID_REQUEST,
    GET_SUBJECTS_BY_TEACHERID_SUCCESS,
    GET_SUBJECTS_BY_TEACHERID_FAILURE,
  } from "../types/getSubjectByTeacherIdType";
  

export const getSubjectByTeacherIdAction = () => async (dispatch) => {
  try {
    dispatch(getSubjectByTeacherIdRequest());
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
    const { data }= await axios.get(`http://localhost:8000/api/subjects/subjects-byteacherid`, {
      headers: headers,
    });

    if(data.statusCode===200){
        dispatch(getSubjectByTeacherIdSuccess(data.data));
      
    }else{
        dispatch(getSubjectByTeacherIdFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(getSubjectByTeacherIdFailure(errorMessage));
    } else {
      dispatch(getSubjectByTeacherIdFailure("Network Error"));
    }
  }
};

export const getSubjectByTeacherIdRequest = () => {
  return {
    type: GET_SUBJECTS_BY_TEACHERID_REQUEST,
  };
};

export const getSubjectByTeacherIdSuccess = (data) => {
  return {
    type: GET_SUBJECTS_BY_TEACHERID_SUCCESS,
    payload: data,
  };
};
export const getSubjectByTeacherIdFailure = (error) => {
  return {
    type: GET_SUBJECTS_BY_TEACHERID_FAILURE,
    payload: error,
  };
};