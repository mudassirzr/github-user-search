import classes from "components/userDetails/userDetails.module.css";
import RepoItemLoader from "./repoItemLoader";
export default function SkeletonLoader(){
    return (
        <div className={classes.userDetailsWrapper}>
            <div className={`${classes.userImage} shimmerLoader`} style={{border: 0}} />
            <ul className={classes.userDetails}>
                <li className={classes.userDetailsItem}><p><strong>Name</strong></p> <span className={`shimmerLoader smallTextLoader`}></span></li>
                <li className={classes.userDetailsItem}><p><strong>Company</strong></p> <span className={`shimmerLoader smallTextLoader`}></span></li>
                <li className={classes.userDetailsItem}><p><strong>Location</strong></p> <span className={`shimmerLoader smallTextLoader`}></span></li>
                <li className={classes.userDetailsItem}><p><strong>Email</strong></p> <span className={`shimmerLoader smallTextLoader`}></span></li>
                <li className={classes.userDetailsItem}><p><strong>Public Repos</strong></p> <span className={`shimmerLoader smallTextLoader`}></span></li>
                <li className={classes.userDetailsItem}><p><strong>Followers</strong></p> <span className={`shimmerLoader smallTextLoader`}></span></li>
                <li className={classes.userDetailsItem}><p><strong>Following</strong></p> <span className={`shimmerLoader smallTextLoader`}></span></li>
                <li className={classes.userDetailsItem}><p><strong>Github Link</strong></p><span className={`shimmerLoader smallTextLoader`}></span></li>
                <li className={classes.userDetailsItem}><p><strong>Bio</strong></p> <span className={`shimmerLoader smallTextLoader`}></span></li>
            </ul>
            <div className={classes.userRepos}>
                <h3>Repositories</h3>
                <div className={classes.repoContainer}>
                    <RepoItemLoader />
                    <RepoItemLoader />
                    <RepoItemLoader />
                    <RepoItemLoader />
                </div>
            </div>
        </div>
    )
}