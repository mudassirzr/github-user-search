import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { searchActionCreators, State } from 'state';
import React from 'react';
import { searchState } from 'state/types';
import { useNavigate } from 'react-router-dom';
function Home() {
  
  const dispatch = useDispatch();
  const { clearSearch, searchTermChange, addSearchTermToHistory } = bindActionCreators(searchActionCreators, dispatch);
  const search : searchState = useSelector((state: State) => state.search, shallowEqual);
  const { searchText } = search
  const onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    searchTermChange(value);
  }
  const navigate = useNavigate();
  const onSearch = async (e: React.SyntheticEvent, text: string) => {
    e.preventDefault();
    addSearchTermToHistory(text);
    navigate(`/user/${text}`);
  }
  return (
    <div>
      <h1>Lookup Github User Details</h1>
      <p>type a github username to check full details of the user!</p>
      <form onSubmit={(e: React.SyntheticEvent)=>onSearch(e, searchText)}>
        <input placeholder='Enter Username to Search' type='text' value={searchText} onChange={onSearchTermChange} />
        <button type="submit">search</button>
        <button type="button" onClick={clearSearch}>clear</button>
      </form>
    </div>
  );
}

export default Home;
