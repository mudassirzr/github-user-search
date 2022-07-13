import { useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchState, } from 'state/types';
import { State } from 'state';
import { historyItem } from "state/types";
import classes from "components/history/history.module.css";

export default function History() {
  const navigate = useNavigate();
  const search : searchState = useSelector((state: State) => state.search, shallowEqual);
  const { history } = search
  const onHistoryClick = (term: string) => {
    navigate(`/user/${term}`);
  }
  return (
    <section>
      <h1 className={classes.historyTitle}>Search History</h1>
      <p className={classes.historySubTitle}><i>previously searched by you</i></p>
         <ul className={classes.historyWrapper}>
        {
          history?.length > 0 ? history.map((term: historyItem, i: number) => (
            <li className={classes.historyItem} key={i} onClick={() => onHistoryClick(term.searchTerm)}>
              <p>{term.searchTerm}</p><small>{new Date(term.timestamp).toLocaleString()}</small>
            </li>
            )
          ) : <li className={classes.historyItem}><em>No history yet!</em></li>
        }
        </ul> 
    </section>
  );
}