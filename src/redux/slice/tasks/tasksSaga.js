import { all, take, takeLatest } from "redux-saga/effects";
import {
    handleAddTasks,
    handleClearCompletedTask,
    handleRemoveTask,
    handleResetTasks,
    handleSetIsCompleteTask,
    handleSetTaskNameAndDesc,
    handleSetTaskPriority,
    handleUpdateTasks,
} from "./tasksHandler";
import {
    addTasks,
    clearCompletedTask,
    removeTask,
    resetTasks,
    setIsCompleteTask,
    setTaskNameAndDesc,
    setTaskPriority,
    setTasks,
} from "./tasksSlice";

export default function* tasksSaga() {
    yield all([
        takeLatest(resetTasks.type, handleResetTasks),
        takeLatest(setTasks.type, handleUpdateTasks),
        takeLatest(removeTask.type, handleRemoveTask),
        takeLatest(addTasks.type, handleAddTasks),
        takeLatest(setIsCompleteTask.type, handleSetIsCompleteTask),
        takeLatest(clearCompletedTask.type, handleClearCompletedTask),
        takeLatest(setTaskNameAndDesc.type, handleSetTaskNameAndDesc),
        takeLatest(setTaskPriority.type, handleSetTaskPriority),
    ]);
}
