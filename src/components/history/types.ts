import { historyItem } from "state/types";

export type HistoryProps = {
    history: historyItem[];
    onHistoryClick: (item: string) => void
}