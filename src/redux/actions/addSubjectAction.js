import axios from "axios";
import {
    ADD_SUBJECT_REQUEST,
    ADD_SUBJECT_SUCCESS,
    ADD_SUBJECT_FAILURE,
  } from "../types/addSubjectType";

export const addSubjectAction = (subjectName,description) => async (dispatch) => {
  try {
    dispatch(addSubjectRequest());
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
    const res = await axios.post(`http://localhost:8000/api/subjects`,{
        subjectName,
        description,
       
    },{
      headers: headers,
    });
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(addSubjectSuccess(data));
    }else{
        dispatch(addSubjectFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(addSubjectFailure(errorMessage));
    } else {
      dispatch(addSubjectFailure("Network Error"));
    }
  }
};

export const addSubjectRequest = () => {
  return {
    type:  ADD_SUBJECT_REQUEST,
  };
};

export const addSubjectSuccess = (data) => {
  return {
    type:  ADD_SUBJECT_SUCCESS,
    payload: data,
  };
};
export const addSubjectFailure = (error) => {
  return {
    type:  ADD_SUBJECT_FAILURE,
    payload: error,
  };
};