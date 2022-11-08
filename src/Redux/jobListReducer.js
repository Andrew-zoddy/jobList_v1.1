import {jobsAPI} from "../api/joblistEndpoints";
import {setError, setLoading} from "./appReducer";

// Types
const SET_JOBS_DATA = 'SET_JOBS_DATA';


//Initial State
const initialState = {
    jobsData: [],
}

// REDUCER
export const jobListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOBS_DATA:
            return {...state, jobsData: action.payload}
        default:
            return state
    }
};

//action thunk
export const getJobsData = () => async (dispatch) => {
    try {
        dispatch(setError(''))
        dispatch(setLoading(true))
        const response = await jobsAPI.getData();
        if (response.status === 200) {
            dispatch(setData(response.data))
            dispatch(setLoading(false))
        }


    } catch (error) {
        dispatch(setError(error))
    }
};

//Action
export const setData = (data) => {
    return {
        type: SET_JOBS_DATA,
        payload: data
    }
}