import axios from "axios";
import {
    UPLOAD_VIDEO_REQUEST,
    UPLOAD_VIDEO_SUCCESS,
    UPLOAD_VIDEO_FAILURE,
  } from "../types/uploadVideoType";

export const uploadVideoAction = (formData,videoId) => async (dispatch) => {
    console.log("data..",formData,videoId)
  try {
    dispatch(uploadVideoRequest());
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

    const res = await axios.put(`http://localhost:8000/api/subjects/update-video/${videoId}`,
        formData
    ,
        {headers: headers}
        );
    const { data } = await res;
    if(data.statusCode===200){
        dispatch(uploadVideoSuccess(data));
      
    }else{
        dispatch(uploadVideoFailure(data.message));  
    } 
  } catch (err) {
   
    if (err.response) {
      const errorMessage = err.response.data.message
      dispatch(uploadVideoFailure(errorMessage));
    } else {
      dispatch(uploadVideoFailure("Network Error"));
    }
  }
};

export const uploadVideoRequest = () => {
  return {
    type:  UPLOAD_VIDEO_REQUEST,
  };
};

export const uploadVideoSuccess = (data) => {
  return {
    type:  UPLOAD_VIDEO_SUCCESS,
    payload: data,
  };
};
export const uploadVideoFailure = (error) => {
  return {
    type: UPLOAD_VIDEO_FAILURE,
    payload: error,
  };
};