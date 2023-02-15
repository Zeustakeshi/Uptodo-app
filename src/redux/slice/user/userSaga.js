import { all, takeLatest } from "redux-saga/effects";
import {
    handleResetUser,
    handleUpdateUser,
    handleUpdateUserAvatar,
    handleUpdateUserName,
} from "./userHanlder";
import {
    resetUserInfo,
    setUserAvatar,
    setUserInfo,
    setUserName,
} from "./userSlice";

export default function* userSaga() {
    yield all([
        takeLatest(resetUserInfo.type, handleResetUser),
        takeLatest(setUserInfo.type, handleUpdateUser),
        takeLatest(setUserAvatar.type, handleUpdateUserAvatar),
        takeLatest(setUserName.type, handleUpdateUserName),
    ]);
}
