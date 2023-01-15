import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slice/tasksSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: tasksSlice,
    },
});
