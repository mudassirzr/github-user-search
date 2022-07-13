import { bindActionCreators } from "@reduxjs/toolkit";
import { useCallback, useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { State, userActionCreators } from "state";
import { UserDetailsObject } from "state/types";
import { userDetailsProps } from "./types";

export default function UserDetails(props : userDetailsProps)  {
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const users : UserDetailsObject  = useSelector((state: State) => state.users, shallowEqual);
    const dispatch = useDispatch();
    const { setUserDetails, setUserError } = bindActionCreators(userActionCreators, dispatch);
    const { userId } = props;
    const id = useMemo(() => userId.toLocaleLowerCase(), [userId]);
    useEffect(() => {
        const fetchUserDetails = async () => {
            setIsLoading(true)
            const response = await fetch(`https://api.github.com/users/${id}`);
            const data = await response.json();
            if (response.ok) {
                setUserDetails(data);
            }else {
                setUserError(id, data.message);
            }
            setIsLoading(false)
        }
        if(!users[id]){
            fetchUserDetails()
        }
    }, []);

    const renderUserDetails = useCallback(() => {
        const user = users[id]
        if(isLoading){
            return <div>Fetching User Details...</div>
        }
        else if(user?.error){
            return <div>{user.error}</div>
        }
        else if(user?.login){
            return (
                <div>
                    <img src={user.avatar_url} alt={user.login} />
                    <h1>{user.login}</h1>
                    <p>{user.bio}</p>
                </div>
            )
        }
        return <>Loading...</>
    },[users, id, isLoading]);
    return (
        renderUserDetails()
    )
}