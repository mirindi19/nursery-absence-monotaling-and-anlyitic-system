import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getParentsAction } from "../../redux/actions/getParentsAction";
import { getStudentsAction } from "../../redux/actions/getStudentsAction";
import { getUsersAction } from "../../redux/actions/getUsersAction";
import { getTeachersAction } from "../../redux/actions/teacherListAction";
import './widget.scss'
import { getStudentsClassIdAction } from "../../redux/actions/getStudentsByClassIdAction";
import { getSubjectByTeacherIdAction } from "../../redux/actions/getSubjectByTeacherIdAction";

const Widget = ({ type }) => {
  const dispatch=useDispatch();


const getStudentsByClassId=useSelector((state)=>state.getStudentsByClassId);
const [studentsList,setStudentsList]=React.useState([])

const getSubjectByTeacherId=useSelector((state)=>state.getSubjectByTeacherId)
const [subjectDetails,setSubjectDetails]=React.useState([]);
const getUsers=useSelector((state)=>state.getUsers)
const [usersList,setUsersList]=React.useState([])
React.useEffect(()=>{
 async function fetchData(){
  await dispatch(getUsersAction())
 }
 fetchData()
},[])

React.useEffect(()=>{
  async function fetchData(){
if(!getUsers.loading){
  if(getUsers.details.length>0){
    setUsersList(getUsers.details)
  }
}
  }
  fetchData()
 },[getUsers.details])


 React.useEffect(()=>{
    async function fetchData(){
     await dispatch(getStudentsClassIdAction())
    }
    fetchData()
   },[])
 
   React.useEffect(()=>{
     async function fetchData(){
   if(!getStudentsByClassId.loading){
     if(getStudentsByClassId.details.length>0){
       setStudentsList(getStudentsByClassId.details)
     }
   }
     }
     fetchData()
    },[getStudentsByClassId.details])

    React.useEffect(()=>{
        async function fetchData(){
         await dispatch(getSubjectByTeacherIdAction())
        }
        fetchData()
       },[]) 
        React.useEffect(()=>{
        async function fetchData(){
      if(!getSubjectByTeacherId.loading){
        if(getSubjectByTeacherId.details.length>0){
          setSubjectDetails(getSubjectByTeacherId.details)
        }
      }
        }
        fetchData()
       },[getSubjectByTeacherId.details])
 
  let data;
   switch(type){
    case "user":
      data ={
      title: "Number of Courses",
      counter: subjectDetails.length,
    };
    break;
    case "student":
      data ={
      title: "STUDENTS",
      counter: studentsList.length,
    };
    break;
   
    default:
      break;
   }

  return (
    <div className='widget'>
    <div className='left'>
    <span className='counter'>{data.counter}</span>
    <span className='title'>{data.title}</span>
    </div>
    </div>
  )
}

export default Widget