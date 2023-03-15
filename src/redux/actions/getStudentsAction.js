import axios from "axios";
import {
    GET_STUDENTS_REQUEST,
    GET_STUDENTS_SUCCESS,
    GET_STUDENTS_FAILURE,
  } from "../types/getStudentsType";

export const getStudentsAction = () => async (dispatch) => {
  try {
    dispatch(getStudentsRequest());
    const res = await axios.get(`http://localhost:8000/api/students`);
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(getStudentsSuccess(data.data));
      
    }else{
        dispatch(getStudentsFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(getStudentsFailure(errorMessage));
    } else {
      dispatch(getStudentsFailure("Network Error"));
    }
  }
};

export const getStudentsRequest = () => {
  return {
    type: GET_STUDENTS_REQUEST,
  };
};

export const getStudentsSuccess = (data) => {
  return {
    type: GET_STUDENTS_SUCCESS,
    payload: data,
  };
};
export const getStudentsFailure = (error) => {
  return {
    type: GET_STUDENTS_FAILURE,
    payload: error,
  };
};