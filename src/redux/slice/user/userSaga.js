import { all, takeLatest } from "redux-saga/effects";
import { handleResetUser, handleUpdateUser } from "./userHanlder";
import { resetUserInfo, setUserInfo } from "./userSlice";

export default function* userSaga() {
    yield all([
        takeLatest(resetUserInfo.type, handleResetUser),
        takeLatest(setUserInfo.type, handleUpdateUser),
    ]);
}
