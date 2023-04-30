import axios from "axios";
import {
    GET_STUDENT_BY_CLASSID_REQUEST,
    GET_STUDENT_BY_CLASSID_SUCCESS,
    GET_STUDENT_BY_CLASSID_FAILURE,
  } from "../types/getStudentsByClassIdType";

export const getStudentsClassIdAction = () => async (dispatch) => {
  try {
    dispatch(getStudentsClassIdRequest());
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
    const { data }= await axios.get(`http://localhost:8000/api/students/students-classe`, {
      headers: headers,
    });

    if(data.statusCode===200){
        dispatch(getStudentsClassIdSuccess(data.data));
      
    }else{
        dispatch(getStudentsClassIdFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(getStudentsClassIdFailure(errorMessage));
    } else {
      dispatch(getStudentsClassIdFailure("Network Error"));
    }
  }
};

export const getStudentsClassIdRequest = () => {
  return {
    type: GET_STUDENT_BY_CLASSID_REQUEST,
  };
};

export const getStudentsClassIdSuccess = (data) => {
  return {
    type: GET_STUDENT_BY_CLASSID_SUCCESS,
    payload: data,
  };
};
export const getStudentsClassIdFailure = (error) => {
  return {
    type: GET_STUDENT_BY_CLASSID_FAILURE,
    payload: error,
  };
};