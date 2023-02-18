import { all, takeLatest } from "redux-saga/effects";
import { handleUpdateFocusTime } from "./appHandler";
import { setFocusTime } from "./appSlice";

export default function* appSaga() {
    yield all([takeLatest(setFocusTime.type, handleUpdateFocusTime)]);
}
