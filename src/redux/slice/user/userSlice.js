import { createSlice } from "@reduxjs/toolkit";
import { validateEmail, validatePassword } from "../../../const";

const initialState = {
    id: "",
    email: "",
    phone: "",
    userName: "",
    password: "",
    avatar: "",
    todoCoin: 10,
    task: {
        taskLeft: 0,
        taskDone: 0,
    },
    isLogin: false,
};

const userSlice = createSlice({
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
            state.phone = payload.phone || "";
            state.password = payload.password || "";
            state.avatar = payload.avatar || "";
            state.todoCoin = payload.todoCoin || 10;
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

        setUserPassword(state, action) {},
        updateUserPassword(state, action) {
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
    updateUserPassword,
    setUserTaskDone,
    setUserTaskLeft,
} = userSlice.actions;
export default userSlice.reducer;
