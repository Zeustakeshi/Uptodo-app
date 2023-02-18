import AsyncStorage from "@react-native-async-storage/async-storage";
import { put, select } from "redux-saga/effects";
import {
    updateFocusNotification,
    updateFocusSetting,
    updateFocusTime,
    updateFocusTimeRelax,
    updateSetting,
} from "./appSlice";

export function* handleUpdateSetting() {
    const settingData = yield AsyncStorage.getItem("setting");
    if (settingData) {
        yield put(updateSetting(JSON.parse(settingData)));
    }
}

export function* handleUpdateFocusSetting() {
    const focusSettingData = yield AsyncStorage.getItem("focusSetting");
    if (focusSettingData) {
        yield put(updateFocusSetting(JSON.parse(focusSettingData)));
    }
}

/** FOCUS SETTING */
export function* handleUpdateFocusTime(action) {
    const { focusSetting } = yield select((state) => state.app);
    const newSetting = {
        ...focusSetting,
        timeFocus: {
            ...focusSetting.timeFocus,
            currentOption: action.payload,
        },
    };
    yield AsyncStorage.setItem("focusSetting", JSON.stringify(newSetting));
    yield put(updateFocusTime(action.payload));
}

export function* handleUpdateFocusTimeRelax(action) {
    const { focusSetting } = yield select((state) => state.app);
    const newSetting = {
        ...focusSetting,
        timeRelax: {
            ...focusSetting.timeRelax,
            currentOption: action.payload,
        },
    };
    yield AsyncStorage.setItem("focusSetting", JSON.stringify(newSetting));
    yield put(updateFocusTimeRelax(action.payload));
}

export function* handleUpdateFocusNotifications(action) {
    const { focusSetting } = yield select((state) => state.app);
    const newSetting = {
        ...focusSetting,
        notifications: action.payload,
    };

    if (action.payload === false) {
        /**Handle turn off notify when focus */
    }

    yield AsyncStorage.setItem("focusSetting", JSON.stringify(newSetting));
    yield put(updateFocusNotification(action.payload));
}
