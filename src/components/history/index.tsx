import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchState, } from 'state/types';
import { searchActionCreators, State } from 'state';
import { historyItem } from "state/types";
import classes from "components/history/history.module.css";
import { bindActionCreators } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

export default function History() {
  const navigate = useNavigate();
  const search : searchState = useSelector((state: State) => state.search, shallowEqual);
  const dispatch = useDispatch();
  const { clearHistory } = bindActionCreators(searchActionCreators, dispatch);
  const { history } = search
  const onHistoryClick = (term: string) => {
    navigate(`/user/${term}`);
  }
  const onClearHistory = () => {
    storage.removeItem('persist:root')
    clearHistory();
  }
  return (
    <section>
      <h1 className={classes.historyTitle}>Search History</h1>
      <p className={classes.historySubTitle}><i>previously searched by you</i></p>
         <ul className={classes.historyWrapper}>
        {
          history?.length > 0 ? (
            <>
            <button onClick={onClearHistory}>Clear History</button>
            {
              history.map((term: historyItem, i: number) => (
                  <li className={classes.historyItem} key={i} onClick={() => onHistoryClick(term.searchTerm)}>
                    <p>{term.searchTerm}</p><small>{new Date(term.timestamp).toLocaleString()}</small>
                  </li>
                )
              )
            }
            </>
          ) : <li className={classes.historyItem}><em>No history yet!</em></li>
        }
        </ul> 
    </section>
  );
}