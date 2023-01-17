import { all, take, takeLatest } from "redux-saga/effects";
import {
    handleAddTasks,
    handleRemoveTask,
    handleResetTasks,
    handleSetIsCompleteTask,
    handleUpdateTasks,
} from "./tasksHandler";
import {
    addTasks,
    removeTask,
    resetTasks,
    setIsCompleteTask,
    setTasks,
} from "./tasksSlice";

export default function* tasksSaga() {
    yield all([
        takeLatest(resetTasks.type, handleResetTasks),
        takeLatest(setTasks.type, handleUpdateTasks),
        takeLatest(removeTask.type, handleRemoveTask),
        takeLatest(addTasks.type, handleAddTasks),
        takeLatest(setIsCompleteTask.type, handleSetIsCompleteTask),
    ]);
}
