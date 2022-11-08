//Types
const SET_ERROR_DATA = 'APP/SET_ERROR_DATA'
const SET_SUCCESS = 'APP/SET_SUCCESS'
const SET_LOADING = 'APP/SET_LOADING'

//Initial state for reducer
const initialState = {
    error: '',
    success: '',
    loading: false,

}

//Reducer
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR_DATA:
            return {...state, error: action.payload};
        case SET_SUCCESS:
            return {...state, success: action.payload};
        case SET_LOADING:
            return {...state, loading: action.payload};
        default:
            return state
    }
};

// Actions
export const setError = (error) => {
    return {
        type: SET_ERROR_DATA,
        payload: error
    }
}
export const setLoading = (bool) => {
    return {
        type: SET_LOADING,
        payload: bool
    }
}

