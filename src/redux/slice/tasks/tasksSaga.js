import { all, takeLatest } from "redux-saga/effects";
import { handleResetTasks, handleUpdateTasks } from "./tasksHandler";
import { resetTasks, setTasks } from "./tasksSlice";

export default function* tasksSaga() {
    yield all([
        takeLatest(resetTasks.type, handleResetTasks),
        takeLatest(setTasks.type, handleUpdateTasks),
    ]);
}
