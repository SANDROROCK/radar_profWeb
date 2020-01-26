import { ADD_TASK } from "../../types";

const initialState = {
    props: [],
};

function rootReducer(state = initialState, action) {
    if(action.type === ADD_TASK){
        return{
            ...state,
            props:[ ...state,action.payload]
        }
    }
    return state;
};

export default rootReducer;