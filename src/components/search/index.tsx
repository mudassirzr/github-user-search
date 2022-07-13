import { bindActionCreators } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchActionCreators, State } from "state";
import { searchState, User } from "state/types";

export default function SearchResults(){
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const dispatch = useDispatch();
    const { setUsers } = bindActionCreators(searchActionCreators, dispatch);
    const search : searchState = useSelector((state: State) => state.search, shallowEqual);
    useEffect(() => {
        const onSearch = async (text: string) => {
            setIsLoading(true);
            const response = await fetch(`https://api.github.com/search/users?q=${text}`);
            const data = await response.json();
            setUsers(data.items);
            setIsLoading(false);
        }
        onSearch(search.searchText);
    },[search.searchText, setUsers])
    const { users } = search
    return(
        <section>
            {
                isLoading ? <p>Loading...</p> : null
            }
            {
                users?.length > 0 ? users.map((user: User, i: number)=><button key={i}>{user?.login}</button>) : <p>No users found</p>
            }
      </section>
    )
}