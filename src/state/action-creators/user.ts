import { UserActionTypes } from "state/action-types";
import { Dispatch } from "redux";
import { UserActions, UsersDetail } from "state/types";

export const setUserDetails = (user: UsersDetail) => {
    return (dispatch: Dispatch<UserActions>) => {
        dispatch(
            {
                type: UserActionTypes.USER_DATA_CHANGE,
                payload: user
            }
        )
    }
}

export const setUserError = (userId: string, msg: string) => {
    return (dispatch: Dispatch<UserActions>) => {
        dispatch(
            {
                type: UserActionTypes.USER_ERROR,
                payload: {login: userId, error: msg}
            }
        )
    }
}