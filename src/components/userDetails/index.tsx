import { bindActionCreators } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
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
    useEffect(() => {
        const fetchUserDetails = async () => {
            setIsLoading(true)
            const response = await fetch(`https://api.github.com/users/${userId}`);
            const data = await response.json();
            if (response.ok) {
                setUserDetails(data);
            }else {
                setUserError(userId, data.message);
            }
            console.log(response.ok, data,'data')
            setIsLoading(false)
        }
        if(!users[userId]){
            fetchUserDetails()
        }
    }, []);

    const renderUserDetails = () => {
        if(isLoading){
            return <div>Fetching User Details...</div>
        }
        else if(users[userId]?.error){
            return <div>{users[userId].error}</div>
        }
        else if(users[userId]?.login){
            return <div><h1>{users[userId].login}</h1></div>
        }
        return <>Loading...</>
    }
    return (
        renderUserDetails()
    )
}