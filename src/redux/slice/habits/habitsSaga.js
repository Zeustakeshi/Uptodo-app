import { all, takeLatest } from "redux-saga/effects";
import {
    habdleUpdateCompletionCounter,
    handleAddhabitList,
    handleResethabits,
} from "./habitsHandler";
import { addhabitList, reset, setCompletionCounter } from "./habitsSlice";

export default function* habitsSaga() {
    yield all([
        takeLatest(addhabitList.type, handleAddhabitList),
        takeLatest(reset.type, handleResethabits),
        takeLatest(setCompletionCounter.type, habdleUpdateCompletionCounter),
    ]);
}
