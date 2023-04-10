import axios from "axios";
import {
    ADD_PARENT_REQUEST,
    ADD_PARENT_SUCCESS,
    ADD_PARENT_FAILURE,
  } from "../types/addParentType";

export const addParentAction = ( fatherName,motherName,telephone) => async (dispatch) => {
  try {
    dispatch(addParentRequest());
    const res = await axios.post(`http://localhost:8000/api/parents`,{
        fatherName:fatherName,
        motherName:motherName,
        telephone:telephone
    });
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(addParentSuccess(data));
      
    }else{
        dispatch(addParentFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(addParentFailure(errorMessage));
    } else {
      dispatch(addParentFailure("Network Error"));
    }
  }
};

export const addParentRequest = () => {
  return {
    type:  ADD_PARENT_REQUEST,
  };
};

export const addParentSuccess = (data) => {
  return {
    type:  ADD_PARENT_SUCCESS,
    payload: data,
  };
};
export const addParentFailure = (error) => {
  return {
    type:  ADD_PARENT_FAILURE,
    payload: error,
  };
};