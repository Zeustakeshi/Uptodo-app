import { all, takeLatest } from "redux-saga/effects";
import {
    handleResetUser,
    handleUpdateUser,
    handleUpdateUserAvatar,
} from "./userHanlder";
import { resetUserInfo, setUserAvatar, setUserInfo } from "./userSlice";

export default function* userSaga() {
    yield all([
        takeLatest(resetUserInfo.type, handleResetUser),
        takeLatest(setUserInfo.type, handleUpdateUser),
        takeLatest(setUserAvatar.type, handleUpdateUserAvatar),
    ]);
}
