import * as types from "./actionType";

const initialState={
    users:[],
    user:{},
    loading:true, // indicate whether some asynchronous operation (like fetching user data) is in progress.
};

const usersReducers  = (state =  initialState, action) =>{ // If state is undefined (e.g : on the first run), it defaults to initialState.
    switch(action.type){
        case types.GET_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false,
            }

        case types.DELETE_USER:
            return{
                ...state,
                loading:false,
            }

        case types.ADD_USER:
            return{
                ...state,
                loading:false,
            }
        case types.GET_SINGLE_USER:
            return{
                ...state,
                user:action.payload,
                loading:false,
            }
        case types.UPDATE_USER:
            return{
                ...state,
                user:action.payload,
                loading:false,
            }
        default:
            return state;
    }
};

export default usersReducers;