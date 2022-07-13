import { HistoryProps } from "components/history/types";
import { historyItem } from "state/types";

export default function History(props: HistoryProps) {
  const { history, onHistoryClick } = props;
  return (
    <section>
      <h2>Search History</h2>
      {
        history.map((term: historyItem, i: number) => <button key={i} onClick={() => onHistoryClick(term.searchTerm)}>{term.searchTerm}{new Date(term.timestamp).toLocaleString()}</button>)
      }
    </section>
  );
}