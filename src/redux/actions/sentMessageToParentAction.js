import axios from "axios";
import {
    SENT_MESSAGE_TO_PARENT_REQUEST,
    SENT_MESSAGE_TO_PARENT_SUCCESS,
    SENT_MESSAGE_TO_PARENT_FAILURE,
  } from "../types/sentMessageToParentType";

export const addStudentAction = (firstName,lastName,dob,parentId,classId,gender) => async (dispatch) => {

  try {
    dispatch(addStudentRequest());
    const res = await axios.post(`http://localhost:8000/api/students`,{
        firstName,
        lastName,
        dob,
        parentId,
        classId,
        gender
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
    type:  SENT_MESSAGE_TO_PARENT_REQUEST,
  };
};

export const sentMessageSentToParentSuccess = (data) => {
  return {
    type:  SENT_MESSAGE_TO_PARENT_SUCCESS,
    payload: data,
  };
};
export const sentMessageSentToParentFailure = (error) => {
  return {
    type:  SENT_MESSAGE_TO_PARENT_FAILURE,
    payload: error,
  };
};