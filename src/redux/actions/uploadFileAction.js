import axios from "axios";
import {
    UPLOAD_FILE_REQUEST,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAILURE,
  } from "../types/uploadFileType";

export const uploadFileAction = (formData,fileId) => async (dispatch) => {
    console.log("data..",formData,fileId)
  try {
    dispatch(uploadFileRequest());
    const token = await localStorage.getItem("x-access-token");
    let headers;
    if (token) {
      headers = {
        "Content-Type": "multipart/form-data",
        token: `${token}`,
      };
    } else {
      headers = {
        "Content-Type": "multipart/form-data",
      };
    }

    const res = await axios.put(`http://localhost:8000/api/subjects/update-file/${fileId}`,
        formData
    ,
        {headers: headers}
        );
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(uploadFileSuccess(data));
      
    }else{
        dispatch(uploadFileFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(uploadFileFailure(errorMessage));
    } else {
      dispatch(uploadFileFailure("Network Error"));
    }
  }
};

export const uploadFileRequest = () => {
  return {
    type:  UPLOAD_FILE_REQUEST,
  };
};

export const uploadFileSuccess = (data) => {
  return {
    type:  UPLOAD_FILE_SUCCESS,
    payload: data,
  };
};
export const uploadFileFailure = (error) => {
  return {
    type: UPLOAD_FILE_FAILURE,
    payload: error,
  };
};