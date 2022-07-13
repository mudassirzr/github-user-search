import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { searchActionCreators, State } from 'state';
import { searchState } from 'state/types';
import { useNavigate } from 'react-router-dom';
import classes from 'components/searchForm/searchForm.module.css';

export default function SearchForm(){
    const dispatch = useDispatch();
    const { clearSearch, searchTermChange, addSearchTermToHistory } = bindActionCreators(searchActionCreators, dispatch);
    const search : searchState = useSelector((state: State) => state.search, shallowEqual);
    const { searchText } = search
    const onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = String(e.target.value);
        searchTermChange(value);
    }
    const navigate = useNavigate();
    const onSearch = async (e: React.SyntheticEvent, text: string) => {
        e.preventDefault();
        addSearchTermToHistory(text);
        navigate(`/user/${text}`);
    }
    return (
        <form className={classes.searchForm} onSubmit={(e: React.SyntheticEvent)=>onSearch(e, searchText)}>
            <input className={classes.searchFormInput} placeholder='Enter Username to Search' type='text' value={searchText} onChange={onSearchTermChange} />
            <button className={classes.searchSubmitButton} type="submit">search</button>
            <button className={classes.searchClearButton} type="button" onClick={clearSearch}>clear</button>
        </form>
    )
}