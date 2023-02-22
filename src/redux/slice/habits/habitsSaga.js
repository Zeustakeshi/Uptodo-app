import { all, takeLatest } from "redux-saga/effects";
import {
    habdleUpdateCompletionCounter,
    handleAddhabitList,
} from "./habitsHandler";
import { addhabitList, setCompletionCounter } from "./habitsSlice";

export default function* habitsSaga() {
    yield all([
        takeLatest(addhabitList.type, handleAddhabitList),
        takeLatest(setCompletionCounter.type, habdleUpdateCompletionCounter),
    ]);
}
