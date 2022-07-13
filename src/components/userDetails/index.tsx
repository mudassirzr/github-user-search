import { bindActionCreators } from "@reduxjs/toolkit";
import { useCallback, useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { State, userActionCreators } from "state";
import { searchState, UserDetailsObject } from "state/types";
import { UserDetailsProps } from "./types";
import classes from "components/userDetails/userDetails.module.css";
import RepoItem from "./repoItem";
import SkeletonLoader from "./skeletonLoader";

export default function UserDetails(props : UserDetailsProps)  {
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const users : UserDetailsObject  = useSelector((state: State) => state.users, shallowEqual);
    
    const dispatch = useDispatch();
    const { setUserDetails, setUserError } = bindActionCreators(userActionCreators, dispatch);
    const { userId } = props;
    const id = useMemo(() => userId.toLocaleLowerCase(), [userId]);
    useEffect(() => {
        const fetchUserDetails = async () => {
            setIsLoading(true)
            const userResponse = await fetch(`https://api.github.com/users/${id}`);
            const userData = await userResponse.json();
            if (userResponse.ok) {
                const repoResponse = await fetch(userData.repos_url);
                const repoData = await repoResponse.json();
                if (repoResponse.ok) {
                    userData["repositories"] = repoData;
                }else {
                    userData["repositories"] = [];
                }
                setUserDetails(userData);
            } else {
                setUserError(id, "User not found!");
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
            return <SkeletonLoader />
        }
        else if(user?.error){
            return <div className={classes.userDetailsWrapper}><em>{user.error}</em></div>
        }
        else if(user?.login){
            return (
                <div className={classes.userDetailsWrapper}>
                    <img className={classes.userImage} src={user.avatar_url} alt={user.login} />
                    <ul className={classes.userDetails}>
                        <li className={classes.userDetailsItem}><p><strong>Name</strong></p> <p>{user?.name ? user?.name : 'N/A'}</p></li>
                        <li className={classes.userDetailsItem}><p><strong>Company</strong></p> <p>{user?.company ? user?.company : 'N/A'}</p></li>
                        <li className={classes.userDetailsItem}><p><strong>Location</strong></p> <p>{user?.location ? user?.location : 'N/A'}</p></li>
                        <li className={classes.userDetailsItem}><p><strong>Email</strong></p> <p>{user?.email ? user?.email : 'N/A'}</p></li>
                        <li className={classes.userDetailsItem}><p><strong>Public Repos</strong></p> <p>{user?.public_repos ? user?.public_repos : 'N/A'}</p></li>
                        <li className={classes.userDetailsItem}><p><strong>Followers</strong></p> <p>{user?.followers ? user?.followers : 'N/A'}</p></li>
                        <li className={classes.userDetailsItem}><p><strong>Following</strong></p> <p>{user?.following ? user?.following : 'N/A'}</p></li>
                        {user.html_url ?<li className={classes.userDetailsItem}><p><strong>Github Link</strong></p><p><a title="click to view profile on github" target="__blank" href={user.html_url}>{user.login} ↗</a></p></li>:null}
                        <li className={classes.userDetailsItem}><p><strong>Bio</strong></p> <p>{user?.bio ? user?.bio : 'N/A'}</p></li>
                    </ul>
                    <div className={classes.userRepos}>
                        <h3>Repositories</h3>
                        <div className={classes.repoContainer}>
                            {user && user?.repositories && user?.repositories.length>0 ? user.repositories.map((repo, index) =><RepoItem item={repo} />): <div>No repositories found!</div>}
                        </div>
                    </div>
                </div>
            )
        }
        return <SkeletonLoader />
    },[users, id, isLoading]);
    return (
        <>
            <h1>Github user <span className={classes.headingSpan}>@{userId}</span></h1>
            {renderUserDetails()}
        </>
    )
}