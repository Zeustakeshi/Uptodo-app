import AsyncStorage from "@react-native-async-storage/async-storage";
import { put } from "redux-saga/effects";
import { reset, updateTasks } from "./tasksSlice";

export function* handleUpdateTasks(action) {
    console.log("running handler");
    // add to storage
    yield AsyncStorage.setItem("tasks", JSON.stringify(action.payload));
    // add to store
    yield put(updateTasks(action.payload));
    console.log("set storage complete");
}

export function* handleResetTasks(action) {
    // remove from storage
    yield AsyncStorage.removeItem("tasks");
    // remove from store
    yield put(reset());
}
