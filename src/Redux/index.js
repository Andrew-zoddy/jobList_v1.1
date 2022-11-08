import {combineReducers} from "redux";
import {jobListReducer} from "./jobListReducer";
import {appReducer} from "./appReducer";


export const rootReducer = combineReducers({
    jobsData: jobListReducer,
    app: appReducer
});
