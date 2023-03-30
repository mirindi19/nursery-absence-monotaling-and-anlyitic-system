import axios from "axios";
import {
    ADD_STUDENT_REQUEST,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_FAILURE,
  } from "../types/addStudentType";

export const addStudentAction = (firstName,lastName,dob,parentId,classId) => async (dispatch) => {

  try {
    dispatch(addStudentRequest());
    const res = await axios.post(`http://localhost:8000/api/students`,{
        firstName,
        lastName,
        dob,
        parentId,
        classId
    });
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(addStudentSuccess(data));
    }else{
        dispatch(addStudentFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(addStudentFailure(errorMessage));
    } else {
      dispatch(addStudentFailure("Network Error"));
    }
  }
};

export const addStudentRequest = () => {
  return {
    type:  ADD_STUDENT_REQUEST,
  };
};

export const addStudentSuccess = (data) => {
  return {
    type:  ADD_STUDENT_SUCCESS,
    payload: data,
  };
};
export const addStudentFailure = (error) => {
  return {
    type:  ADD_STUDENT_FAILURE,
    payload: error,
  };
};