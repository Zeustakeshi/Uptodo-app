import AsyncStorage from "@react-native-async-storage/async-storage";
import { put, select } from "redux-saga/effects";
import { reset, updateUserAvatar, updateUserInfo } from "./userSlice";
import uuid from "react-native-uuid";

import {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytesResumable,
    uploadString,
} from "@firebase/storage";
import { db } from "../../../firebase/firebase-config";
import { doc, updateDoc } from "firebase/firestore";

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
            // add to store
            yield put(updateUserAvatar(downloadURL));
            // add to storage
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
            // add to store
            yield put(updateUserAvatar(action.payload));
            // add to storage
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
