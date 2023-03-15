import axios from "axios";
import {
    GET_CLASSES_REQUEST,
    GET_CLASSES_SUCCESS,
    GET_CLASSES_FAILURE,
  } from "../types/getClassesType";

export const getClassesAction = () => async (dispatch) => {
  try {
    dispatch(getClassesRequest());
    const res = await axios.get(`http://localhost:8000/api/classes`);
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(getClassesSuccess(data.data));
      
    }else{
        dispatch(getClassesFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(getClassesFailure(errorMessage));
    } else {
      dispatch(getClassesFailure("Network Error"));
    }
  }
};

export const getClassesRequest = () => {
  return {
    type: GET_CLASSES_REQUEST,
  };
};

export const getClassesSuccess = (data) => {
  return {
    type: GET_CLASSES_SUCCESS,
    payload: data,
  };
};
export const getClassesFailure = (error) => {
  return {
    type: GET_CLASSES_FAILURE,
    payload: error,
  };
};