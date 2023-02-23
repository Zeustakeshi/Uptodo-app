import { all, takeLatest } from "redux-saga/effects";
import {
    habdleUpdateCompletionCounter,
    handleAddhabitList,
    handleRemoveHabit,
    handleResethabits,
} from "./habitsHandler";
import {
    addhabitList,
    removeHabit,
    reset,
    setCompletionCounter,
} from "./habitsSlice";

export default function* habitsSaga() {
    yield all([
        takeLatest(addhabitList.type, handleAddhabitList),
        takeLatest(reset.type, handleResethabits),
        takeLatest(setCompletionCounter.type, habdleUpdateCompletionCounter),
        takeLatest(removeHabit.type, handleRemoveHabit),
    ]);
}
