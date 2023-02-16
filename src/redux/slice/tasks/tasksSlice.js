import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tasks: [],
    categrories: [
        { id: 1, name: "Home", icon: "home", color: "#4ade80" },
        { id: 2, name: "Cook", icon: "cook", color: "#f59e0b" },
        { id: 3, name: "Game", icon: "game", color: "#6d28d9" },
        { id: 4, name: "Grocery", icon: "grocery", color: "#fbbf24" },
        { id: 5, name: "work", icon: "work", color: "#22c55e" },
        { id: 6, name: "Sport", icon: "sport", color: "#f87171" },
        { id: 7, name: "Code", icon: "code", color: "#0284c7" },
        { id: 8, name: "Music", icon: "music", color: "#7e22ce" },
        { id: 9, name: "Health", icon: "health", color: "#10b981" },
        { id: 10, name: "Sleep", icon: "sleep", color: "#2563eb" },
        { id: 11, name: "FeedDog", icon: "feedDog", color: "#1d4ed8" },
    ],
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        resetTasks() {},
        reset(state) {
            state = initialState;
        },
        setTasks(state, action) {},
        updateTasks(state, { payload }) {
            state.tasks = payload;
        },
        removeTask(state, action) {},
        remove(state, action) {
            state.tasks = state.tasks.filter((task) => action.payload !== task);
        },
        addTasks(state, action) {},
        add(state, action) {
            state.tasks.push(action.payload);
        },
        setIsCompleteTask(state, action) {},

        clearCompletedTask() {},

        setTaskNameAndDesc(state, action) {},
        setTaskPriority(state, action) {},
    },
});

export const {
    setTaskPriority,
    setTaskNameAndDesc,
    clearCompletedTask,
    setIsCompleteTask,
    reset,
    resetTasks,
    updateTasks,
    setTasks,
    removeTask,
    remove,
    addTasks,
    add,
} = tasksSlice.actions;
export default tasksSlice.reducer;
