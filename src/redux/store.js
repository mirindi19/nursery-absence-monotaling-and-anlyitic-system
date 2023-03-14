import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import allReducers from "./reducers";


//const persistedReducer = persistReducer(persistConfig, allReducers)

const middleware=applyMiddleware(thunk, promise);

//export const store=createStore(persistedReducer, {}, composeWithDevTools(middleware));
//export const persistor = persistStore(store)
//========================correct=========================
export const store=createStore(allReducers, {}, composeWithDevTools(middleware));
