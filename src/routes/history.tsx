import { useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchState, } from 'state/types';
import { State } from 'state';
import History from 'components/history';
export default function HistoryRoute() {
    const navigate = useNavigate();
    const search : searchState = useSelector((state: State) => state.search, shallowEqual);
    const { history } = search
    const onHistoryClick = (term: string) => {
        navigate(`/user/${term}`);
    }
    console.log(history,'history')
    return (
        <div>
            <h1>History</h1>
            {
                history?.length > 0 ? <History history={history} onHistoryClick={onHistoryClick} /> : <p>No search items!</p>
            }
        </div>
    );
}