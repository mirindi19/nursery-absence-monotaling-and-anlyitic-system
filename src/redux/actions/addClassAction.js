import axios from "axios";
import {
    ADD_CLASS_REQUEST,
    ADD_CLASS_SUCCESS,
    ADD_CLASS_FAILURE,
  } from "../types/addClassType";

export const addClassAction = (teacherId,className) => async (dispatch) => {
  try {
    dispatch(addClassRequest());
    const res = await axios.post(`http://localhost:8000/api/classes`,{
     teacherId,
      className
    });
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(addClassSuccess(data));
      
    }else{
        dispatch(addClassFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(addClassFailure(errorMessage));
    } else {
      dispatch(addClassFailure("Network Error"));
    }
  }
};

export const addClassRequest = () => {
  return {
    type:  ADD_CLASS_REQUEST,
  };
};

export const addClassSuccess = (data) => {
  return {
    type:  ADD_CLASS_SUCCESS,
    payload: data,
  };
};
export const addClassFailure = (error) => {
  return {
    type:  ADD_CLASS_FAILURE,
    payload: error,
  };
};