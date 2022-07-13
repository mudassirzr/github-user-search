import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators, State } from 'state';
import { useState } from 'react';
import { searchState, User } from 'state/types';
import  History  from 'components/history';
function App() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const { clearSearch, setUsers, searchTermChange, addSearchTermToHistory } = bindActionCreators(actionCreators, dispatch);
  const search : searchState = useSelector((state: State) => state.search, shallowEqual);
  const { searchText, history, users } = search
  const onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    searchTermChange(value);
  }
  const onSearch = async (text: string) => {
    setIsLoading(true);
    const response = await fetch(`https://api.github.com/search/users?q=${text}`);
    const data = await response.json();
    setUsers(data.items);
    addSearchTermToHistory(text);
    setIsLoading(false);
  }
  const onHistoryClick = (term: string) => {
    searchTermChange(term);
    onSearch(term);
  }
  return (
    <div>
      <h1>Github users search</h1>
      <input placeholder='Search Github Users' type='text' value={searchText} onChange={onSearchTermChange} />
      <button onClick={()=>onSearch(searchText)}>search</button>
      <button onClick={clearSearch}>clear</button>
      <section>
        <h2>Search Results</h2>
        {
          isLoading ? <p>Loading...</p> : null
        }
        {
          users?.length > 0 ? users.map((user: User, i: number)=><button key={i}>{user?.login}</button>) : <p>No users found</p>
        }
        {
          history?.length > 0 ? <History history={history} onHistoryClick={onHistoryClick} /> : null
        }
      </section>
    </div>
  );
}

export default App;
