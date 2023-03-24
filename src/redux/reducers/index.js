import { combineReducers } from "redux";
   import loginReducer from "./loginReducer";
   import getUsersReducer from "./getUsersReducer";
   import teachersListReducer from "./teacherListReducer";
   import getClassesReducer from "./getClassesReducer";
   import getStudentsReducer from "./getStudentsReducer";
   import getParentsReducer from "./getParentsReducer";

   import addTeacherReducer from "./addTeacherReducer";
   import signupReducer from "./signupReducer";
 

const allReducers = combineReducers({
     login:loginReducer,
     getUsers:getUsersReducer,
     teachersList:teachersListReducer,
     getClasses: getClassesReducer,
     getStudents:getStudentsReducer,
     getParents:getParentsReducer,

     addTeacher:addTeacherReducer,
     signup:signupReducer,
   
});

export default allReducers;