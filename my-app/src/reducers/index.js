import { combineReducers  } from "redux"; 
import loginReducer from "./login";

const allReducer = combineReducers ({
    loginReducer,
    // add more reducer here
})

export default allReducer;