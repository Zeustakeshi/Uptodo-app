import { all, takeLatest } from "redux-saga/effects";
import {
    handleUpdateFocusTimeRelax,
    handleUpdateFocusSetting,
    handleUpdateFocusTime,
    handleUpdateSetting,
    handleUpdateFocusNotifications,
} from "./appHandler";
import {
    loadFocusSetting,
    loadSetting,
    setFocusNotifications,
    setFocusTime,
    setFocusTimeRelax,
} from "./appSlice";

export default function* appSaga() {
    yield all([takeLatest(loadSetting.type, handleUpdateSetting)]);
    yield all([takeLatest(loadFocusSetting.type, handleUpdateFocusSetting)]);
    yield all([takeLatest(setFocusTime.type, handleUpdateFocusTime)]);
    yield all([takeLatest(setFocusTimeRelax.type, handleUpdateFocusTimeRelax)]);
    yield all([
        takeLatest(setFocusNotifications.type, handleUpdateFocusNotifications),
    ]);
}
