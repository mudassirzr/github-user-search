import { RepoItemProps } from "components/userDetails/types";
import classes from "components/userDetails/userDetails.module.css";
export default function RepoItem(props: RepoItemProps) {
    const { item } = props;
    return (
        <article className={classes.repoItem}>
            <div className={classes.repoLinkContainer}>
                <a className={classes.repoItemLink} target='__blank' href={item.html_url}>{item.name} ↗</a>
                <span className={classes.repoPill}>{item.private?'Private':'Public'}</span>
            </div>
            <p className={classes.repoDescription}><small><strong>Description:<br/></strong> <span title={item.description? item.description : 'N/A'}>{item.description? item.description : 'N/A'}</span></small></p>
            <small className={classes.repoMetaData}>
                <span><strong>Created:<br/></strong> {item.created_at? new Date(item.created_at).toLocaleString() : 'N/A'}</span>
                <span><strong>Stars:<br/></strong> {item.stargazers_count? item.stargazers_count : 'N/A'}</span>
            </small>
        </article>
    );
}