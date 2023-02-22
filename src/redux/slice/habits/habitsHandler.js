import { addListener } from "@reduxjs/toolkit";
import { put } from "redux-saga/effects";
import { updateCompletionCounter, updateHabitList } from "./habitsSlice";

export function* handleAddhabitList(action) {
    yield put(updateHabitList(action.payload));
}

export function* habdleUpdateCompletionCounter(action) {
    yield put(updateCompletionCounter(action.payload));
}
