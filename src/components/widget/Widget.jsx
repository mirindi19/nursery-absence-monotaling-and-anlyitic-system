import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getParentsAction } from "../../redux/actions/getParentsAction";
import { getStudentsAction } from "../../redux/actions/getStudentsAction";
import { getUsersAction } from "../../redux/actions/getUsersAction";
import { getTeachersAction } from "../../redux/actions/teacherListAction";
import './widget.scss'

const Widget = ({ type }) => {
  const dispatch=useDispatch();
  const teachersList=useSelector((state)=>state.teachersList)
  const [teachersListDetails,setTeachersListDetails]=React.useState([])
// fetch parents
const getParents=useSelector((state)=>state.getParents)
const [parentsList,setParentsList]=React.useState([])



const getStudents=useSelector((state)=>state.getStudents)
const [studentsList,setStudentsList]=React.useState([])

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
  await dispatch(getStudentsAction())
 }
 fetchData()
},[])

React.useEffect(()=>{
  async function fetchData(){
if(!getStudents.loading){
  if(getStudents.details.length>0){
    setStudentsList(getStudents.details)
  }
}
  }
  fetchData()
 },[getStudents.details])
React.useEffect(()=>{
 async function fetchData(){
  await dispatch(getParentsAction())
 }
 fetchData()
},[])

React.useEffect(()=>{
  async function fetchData(){
if(!getParents.loading){
  if(getParents.details.length>0){
    setParentsList(getParents.details)
  }
}
  }
  fetchData()
 },[getParents.details])
  //FETCH Teachers
  React.useEffect(()=>{
    async function fetchData(){
     await dispatch(getTeachersAction())
    }
    fetchData()
   },[])
  React.useEffect(()=>{
    async function fetchData(){
  if(!teachersList.loading){
    if(teachersList.details.length>0){
      setTeachersListDetails(teachersList.details)

    }
  }
    }
    fetchData()
   },[teachersList.details])
  let data;
   switch(type){
    case "user":
      data ={
      title: "USERS",
      counter: usersList.length,
    };
    break;
    case "parent":
      data ={
      title: "PARENTS",
      counter: parentsList.length,
      
    };
    break;
    case "student":
      data ={
      title: "STUDENTS",
      counter: studentsList.length,
    };
    break;
    case "course":
      data ={
      title: "TEACHERS",
      counter: teachersListDetails.length,
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