
import classes from "components/userDetails/userDetails.module.css";
export default function RepoItemLoader() {
    return (
        <article className={classes.repoItem}>
            <div className={classes.repoLinkContainer}>
                <span className={classes.repoItemLink} ><span className={`shimmerLoader smallTextLoader`}></span></span>
                <span className={classes.repoItemLink} ><span className={`shimmerLoader smallTextLoader`}></span></span>
            </div>
            <p className={classes.repoDescription}><small><strong>Description:<br/></strong> <span className={`shimmerLoader extraSmallTextLoader`}></span></small></p>
            <small className={classes.repoMetaData}>
                <span><strong>Created:<br/></strong> <span className={`shimmerLoader extraSmallTextLoader`}></span></span>
                <span><strong>Stars:<br/></strong> <span className={`shimmerLoader extraSmallTextLoader`}></span></span>
            </small>
        </article>
    );
}