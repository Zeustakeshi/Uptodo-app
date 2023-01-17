import AsyncStorage from "@react-native-async-storage/async-storage";
import { put } from "redux-saga/effects";
import { reset, updateUserInfo } from "./userSlice";

export function* handleUpdateUser(action) {
    // add to storage
    AsyncStorage.setItem("user", JSON.stringify(action.payload));
    // add to store
    yield put(updateUserInfo(action.payload));
}

export function* handleResetUser(action) {
    // remove from storage
    yield AsyncStorage.removeItem("user");
    //remove from store
    yield put(reset());
}
