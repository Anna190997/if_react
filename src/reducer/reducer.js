import {LOGIN, LOGOUT} from "../actions/actionTypes";

const initialState = {
    user: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: state.user = true,
            }
        case LOGOUT:
            return {
                ...state,
                user: state.user = false,
            }
        default:
            return state
    }
}
