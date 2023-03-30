import axios from "axios";
import {
    ADD_TEACHER_REQUEST,
    ADD_TEACHER_SUCCESS,
    ADD_TEACHER_FAILURE,
  } from "../types/addTeacherType";

export const addTeacherAction = (telephone,fullName) => async (dispatch) => {
  try {
    dispatch(addTeacherRequest());
    const res = await axios.post(`http://localhost:8000/api/teachers`,{
      telephone:telephone,
      fullName:fullName
    });
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(addTeacherSuccess(data));
      
    }else{
        dispatch(addTeacherFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(addTeacherFailure(errorMessage));
    } else {
      dispatch(addTeacherFailure("Network Error"));
    }
  }
};

export const addTeacherRequest = () => {
  return {
    type:  ADD_TEACHER_REQUEST,
  };
};

export const addTeacherSuccess = (data) => {
  return {
    type:  ADD_TEACHER_SUCCESS,
    payload: data,
  };
};
export const addTeacherFailure = (error) => {
  return {
    type:  ADD_TEACHER_FAILURE,
    payload: error,
  };
};