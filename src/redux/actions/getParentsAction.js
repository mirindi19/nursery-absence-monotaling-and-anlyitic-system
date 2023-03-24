import axios from "axios";
import {
    GET_PARENTS_REQUEST,
    GET_PARENTS_SUCCESS,
    GET_PARENTS_FAILURE,
  } from "../types/getParentsType";

export const getParentsAction = () => async (dispatch) => {
  try {
    dispatch(getParentsRequest());
    const res = await axios.get(`http://localhost:8000/api/parents`);
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(getParentsSuccess(data.data));
    }else{
        dispatch(getParentsFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(getParentsFailure(errorMessage));
    } else {
      dispatch(getParentsFailure("Network Error"));
    }
  }
};

export const getParentsRequest = () => {
  return {
    type: GET_PARENTS_REQUEST,
  };
};

export const getParentsSuccess = (data) => {
  return {
    type: GET_PARENTS_SUCCESS,
    payload: data,
  };
};
export const getParentsFailure = (error) => {
  return {
    type: GET_PARENTS_FAILURE,
    payload: error,
  };
};