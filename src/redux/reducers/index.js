import { combineReducers } from "redux";
   import loginReducer from "./loginReducer";
   import getUsersReducer from "./getUsersReducer";
   import teachersListReducer from "./teacherListReducer";
   import getClassesReducer from "./getClassesReducer";
   import getStudentsReducer from "./getStudentsReducer";
   import getParentsReducer from "./getParentsReducer";

   import addTeacherReducer from "./addTeacherReducer";
   import signupReducer from "./signupReducer";
   import getMessageByTeacherToParentReducer from "./getMessageByTeacherToParentReducer";
   import addClassReducer from "./addClassReducer";
   import addStudentReducer from "./addStudentReducer";

   import addParentReducer from "./addParentReducer";
   import getSubjectByTeacherIdReducer from "./getSubjectByTeacherIdReducer";
   import addSubjectReducer from "./addSubjectReducer";

   import uploadFileReducer from "./uploadFileReducer";
   import uploadVideoReducer from "./uploadVideoReducer";

   import getStudentsByClassIdReducer from "./getStudentsByClassIdReducer";
   import getMessageSentByTeacherReducer from "./getMessagesSentByTeacherReducer";
   import sentMessageToParentReducer from "./sentMessageToParentReducer";

   import getMessageByTeacherToParentOnParentSideReducer from "./getMessageByTeacherToParentOnParentSideReducer";
const allReducers = combineReducers({
     login:loginReducer,
     getUsers:getUsersReducer,
     teachersList:teachersListReducer,
     getClasses: getClassesReducer,
     getStudents:getStudentsReducer,
     getParents:getParentsReducer,

     addTeacher:addTeacherReducer,
     signup:signupReducer,
     getMessageByTeacherToParent:getMessageByTeacherToParentReducer ,
     addClass:addClassReducer,
   
     addStudent:addStudentReducer,
     addParent:addParentReducer,
     getSubjectByTeacherId: getSubjectByTeacherIdReducer,

     addSubject:addSubjectReducer,
     uploadFile:uploadFileReducer,

     uploadVideo:uploadVideoReducer,
     getStudentsByClassId:getStudentsByClassIdReducer,
     getMessageSentByTeacher: getMessageSentByTeacherReducer,

     sentMessageToParent:sentMessageToParentReducer,
     getMessageByTeacherToParentOnParentSide:getMessageByTeacherToParentOnParentSideReducer,
});

export default allReducers;