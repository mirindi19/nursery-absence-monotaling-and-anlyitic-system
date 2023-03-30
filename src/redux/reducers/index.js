import { combineReducers } from "redux";
   import loginReducer from "./loginReducer";
   import getUsersReducer from "./getUsersReducer";
   import teachersListReducer from "./teacherListReducer";
   import getClassesReducer from "./getClassesReducer";
   import getStudentsReducer from "./getStudentsReducer";
   import getParentsReducer from "./getParentsReducer";

   import addTeacherReducer from "./addTeacherReducer";
   import signupReducer from "./signupReducer";
   import getMessageByteacherReducer from "./getMessageByteacherReducer";
   import addClassReducer from "./addClassReducer";
   import addStudentReducer from "./addStudentReducer";
 

const allReducers = combineReducers({
     login:loginReducer,
     getUsers:getUsersReducer,
     teachersList:teachersListReducer,
     getClasses: getClassesReducer,
     getStudents:getStudentsReducer,
     getParents:getParentsReducer,

     addTeacher:addTeacherReducer,
     signup:signupReducer,
     getMessageByteacher:getMessageByteacherReducer,
     addClass:addClassReducer,
   
     addStudent:addStudentReducer,
});

export default allReducers;