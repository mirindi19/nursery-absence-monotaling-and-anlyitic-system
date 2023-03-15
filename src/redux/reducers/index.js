import { combineReducers } from "redux";
   import loginReducer from "./loginReducer";
   import getUsersReducer from "./getUsersReducer";
   import teachersListReducer from "./teacherListReducer";
   import getClassesReducer from "./getClassesReducer";
   import getStudentsReducer from "./getStudentsReducer";
 

const allReducers = combineReducers({
     login:loginReducer,
     getUsers:getUsersReducer,
     teachersList:teachersListReducer,
     getClasses: getClassesReducer,
     getStudents:getStudentsReducer,
   
});

export default allReducers;