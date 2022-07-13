import { UserActionTypes } from "state/action-types";
import { UserDetailsObject, UserActions } from "state/types";

const initialState = {
}
const reducer = (state: UserDetailsObject = initialState, action: UserActions) => {
    switch (action.type) {
        case UserActionTypes.USER_DATA_CHANGE:
            let newUser:UserDetailsObject = {}
            newUser[action.payload.login] = action.payload 
            return {...state, ...newUser};
        case UserActionTypes.USER_ERROR:
            const errorUser:UserDetailsObject = {}
            errorUser[action.payload.login] = action.payload 
            return {...state, ...errorUser}
            // return {...state, data: action.payload};
        default:
            return state;
    }
}
export default reducer;