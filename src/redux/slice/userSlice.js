import { createSlice } from "@reduxjs/toolkit";
import { validatePassword } from "../../const";

const initialState = {
    userName: "",
    password: "",
    avatar: "",
    task: {
        taskLeft: 0,
        taskDone: 0,
    },
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUserInfo(state, { payload }) {
            state.userName = payload.userName || "";
            state.password = payload.password || "";
            state.avatar = payload.avatar || "";
            state.task.taskLeft = payload.task.taskLeft || 0;
            state.task.taskDone = payload.task.taskDone || 0;
        },

        setUserName(state, action) {
            if (action.payload.trim() !== "") {
                state.userName = action.payload;
            }
        },
        setUserPassword(state, action) {
            if (validatePassword(action.payload)) {
                state.password = action.payload;
            }
        },
        setUserAvatar(state, action) {
            state.avatar = action.payload;
        },
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
    setUserInfo,
    setUserName,
    setUserAvatar,
    setUserPassword,
    setUserTaskDone,
    setUserTaskLeft,
} = userSlice.actions;
export default userSlice.reducer;
