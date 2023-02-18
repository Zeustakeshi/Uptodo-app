import AsyncStorage from "@react-native-async-storage/async-storage";
import { put, select } from "redux-saga/effects";
import {
    reset,
    updateUserAvatar,
    updateUserInfo,
    updateUserName,
} from "./userSlice";

import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "@firebase/storage";
import { useNavigation } from "@react-navigation/native";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";

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

export function* handleUpdateUserAvatar(action) {
    const user = yield select((state) => state.user);
    // add to firebase storage and get download url
    const getStorageRef = (fileName, path) => {
        const storage = getStorage();
        return ref(storage, `${path}/${fileName}`);
    };
    const storageRef = getStorageRef(`avatar-${user.id}.png`, "images/avatar");
    try {
        const response = yield fetch(action.payload);
        const blob = yield response.blob();
        yield uploadBytesResumable(storageRef, blob);
        const downloadURL = yield getDownloadURL(storageRef);
        if (downloadURL) {
            // update to store
            yield put(updateUserAvatar(downloadURL));
            // update to storage
            AsyncStorage.setItem(
                "user",
                JSON.stringify({ ...user, avatar: downloadURL })
            );
            // update data to firebase firestore
            const userRef = doc(db, "users", user.id);
            yield updateDoc(userRef, {
                avatar: downloadURL,
            });
        } else {
            // update to store
            yield put(updateUserAvatar(action.payload));
            // update to storage
            AsyncStorage.setItem(
                "user",
                JSON.stringify({ ...user, avatar: action.payload })
            );
        }
    } catch (error) {
        console.log(`Failed to upload image: ${error}`);
        return null;
    }
}

export function* handleUpdateUserName(action) {
    const user = yield select((state) => state.user);
    if (!action.payload.trim() || action.payload === user.userName) return;

    // update data to firebase firestore
    const userRef = doc(db, "users", user.id);
    yield updateDoc(userRef, {
        userName: action.payload,
    });
    // update to storage
    AsyncStorage.setItem(
        "user",
        JSON.stringify({ ...user, userName: action.payload })
    );

    // update to store
    yield put(updateUserName(action.payload));
}

export function* handleUpdateUserPassword(action) {
    const navigation = useNavigation();
    const { oldPassword, newPassword } = action.payload;
    if (!oldPassword.trim() || !newPassword.trim()) return;

    try {
        // const result = yield authX.reauthenticateWithCredential(
        //     user,
        //     credential
        // );
        // if (result) {
        //     authX.updatePassword(user, newPassword);
        //     yield put(updateUserPassword(newPassword));
        // }
    } catch (error) {
        alert(error);
    }
}
