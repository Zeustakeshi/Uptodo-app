import { createSlice } from "@reduxjs/toolkit";
import { validateEmail, validatePassword } from "../../../const";

const initialState = {
    theme: "light",
    font: "roboto",
    lang: "en",
    color: {
        primary: "",
        secondary: "",
    },
    focusSetting: {
        time: 60,
        notify: false,
        music: "",
    },
};

const appSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        resetUserInfo() {},
        reset(state) {
            state = initialState;
        },

        updateUserInfo(state, { payload }) {
            state.id = payload.id || "";
            state.userName = payload.userName || "";
            state.email = payload.email || "";
            state.password = payload.password || "";
            state.avatar = payload.avatar || "";
            state.task.taskLeft = payload.task.taskLeft || 0;
            state.task.taskDone = payload.task.taskDone || 0;
            state.isLogin = payload.isLogin;
        },
        setUserInfo(state, action) {},

        setEmail(state, action) {
            if (validateEmail(action.payload)) {
                state.email = action.payload;
            }
        },

        setUserName(state, action) {},

        updateUserName(state, action) {
            if (action.payload.trim() !== "") {
                state.userName = action.payload;
            }
        },

        setUserPassword(state, action) {
            if (validatePassword(action.payload)) {
                state.password = action.payload;
            }
        },

        updateUserAvatar(state, action) {
            state.avatar = action.payload;
        },
        setUserAvatar(state, action) {},

        setUserTaskLeft(state, action) {
            if (action.payload >= 0) {
                state.task.taskLeft = action.payload;
            }
        },
        setUserTaskDone(state, action) {
            if (action.payload >= 0) {
                state.task.taskDone = action.payload;
            }
        },
    },
});

export const {
    reset,
    resetUserInfo,
    updateUserInfo,
    setUserInfo,
    setUserName,
    updateUserName,
    setEmail,
    setUserAvatar,
    updateUserAvatar,
    setUserPassword,
    setUserTaskDone,
    setUserTaskLeft,
} = appSlice.actions;
export default appSlice.reducer;
