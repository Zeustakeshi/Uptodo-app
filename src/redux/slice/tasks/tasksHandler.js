import AsyncStorage from "@react-native-async-storage/async-storage";
import { put, select } from "redux-saga/effects";
import { remove, reset, updateTasks } from "./tasksSlice";

export function* handleUpdateTasks(action) {
    // add to storage
    yield AsyncStorage.setItem("tasks", JSON.stringify(action.payload));
    // add to store
    yield put(updateTasks(action.payload));
}

export function* handleResetTasks(action) {
    // remove from storage
    yield AsyncStorage.removeItem("tasks");
    // remove from store
    yield put(reset());
}

export function* handleRemoveTask(action) {
    const { tasks } = yield select((state) => state.tasks);
    const newTasks = tasks.filter((task) => task.id !== action.payload);
    yield AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
    yield put(updateTasks(newTasks));
}

export function* handleAddTasks(action) {
    const { tasks } = yield select((state) => state.tasks);
    const newTasks = [action.payload, ...tasks];
    yield AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
    yield put(updateTasks(newTasks));
}

export function* handleSetIsCompleteTask(action) {
    const { tasks } = yield select((state) => state.tasks);
    const newTasks = tasks.map((task) => {
        if (task.id === action.payload.id) {
            return { ...task, isCompleted: action.payload.value };
        }
        return task;
    });

    yield put(updateTasks(newTasks));
}
