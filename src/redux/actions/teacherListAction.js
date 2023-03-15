import axios from "axios";
import {
    GET_TEACHERS_REQUEST,
    GET_TEACHERS_SUCCESS,
    GET_TEACHERS_FAILURE,
  } from "../types/teacherListType";
  

export const getTeachersAction = () => async (dispatch) => {
  try {
    dispatch(getTeachersRequest());
    const res = await axios.get(`http://localhost:8000/api/teachers`);
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(getTeachersSuccess(data.data));
      
    }else{
        dispatch(getTeachersFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(getTeachersFailure(errorMessage));
    } else {
      dispatch(getTeachersFailure("Network Error"));
    }
  }
};

export const getTeachersRequest = () => {
  return {
    type: GET_TEACHERS_REQUEST,
  };
};

export const getTeachersSuccess = (data) => {
  return {
    type: GET_TEACHERS_SUCCESS,
    payload: data,
  };
};
export const getTeachersFailure = (error) => {
  return {
    type: GET_TEACHERS_FAILURE,
    payload: error,
  };
};