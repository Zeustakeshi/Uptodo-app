import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";
const initialState = {
    uncomplete: [
        {
            id: uuid.v4(),
            name: "Learn Algorithm",
            desc: "Learn more and more c++",
            time: {
                start: "Sat Jan 14 2023 21:00:00",
                end: "Sat Jan 15 2023 21:30:04",
            },

            categrory: 4,
            isCompleted: false,
            priority: 1,
        },
        {
            id: uuid.v4(),
            name: "Cooking",
            desc: "Learn more and more c++",
            time: {
                start: "Sat Jan 14 2023 21:00:00",
                end: "Sat Dec 23 2023 21:30:04",
            },
            categrory: 2,
            isCompleted: false,
            priority: 1,
        },
        {
            id: uuid.v4(),
            name: "Learn Redux",
            desc: "Learn Redux toolkit, redux saga ",
            time: {
                start: "Sat Jan 14 2023 21:00:00",
                end: "Sat Jan 15 2023 21:30:04",
            },

            categrory: 7,
            isCompleted: false,
            priority: 1,
        },
        {
            id: uuid.v4(),
            name: "Learn c++",
            desc: "Learn more and more c++",
            time: {
                start: "Sat Jan 14 2023 21:00:00",
                end: "Mon Jan 16 2023 21:30:04",
            },

            categrory: 8,
            isCompleted: false,
            priority: 1,
        },
    ],
    completed: [
        {
            id: uuid.v4(),
            name: "Learn Binary Search on answer",
            desc: "Learn more and more c++2",
            time: {
                start: "Sat Jan 14 2023 21:00:00",
                end: "Mon Jan 16 2023 21:30:04",
            },
            categrory: 10,
            isCompleted: true,
            priority: 1,
        },
        {
            id: uuid.v4(),
            name: "Learn React native",
            desc: "Update font-end skill",
            time: {
                start: "Sat Jan 14 2023 21:00:00",
                end: "Mon Jan 16 2023 21:30:04",
            },
            categrory: 11,
            isCompleted: true,
            priority: 1,
        },
        {
            id: uuid.v4(),
            name: "HTML, CSS, Javacript",
            desc: "Learn more and more c++2 Learn more and more c++2Learn more and more c++2Learn more and more c++2",
            time: {
                start: "Sat Jan 14 2023 21:00:00",
                end: "Mon Jan 16 2023 21:30:04",
            },
            categrory: 3,
            isCompleted: true,
            priority: 1,
        },
        {
            id: uuid.v4(),
            name: "Learn Search and Sort algorithm",
            desc: "Learn more and more c++2",
            time: {
                start: "Sat Jan 14 2023 21:00:00",
                end: "Mon Jan 16 2023 21:30:04",
            },
            categrory: 6,
            isCompleted: true,
            priority: 1,
        },
    ],
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
        addCompletedTask(state, action) {
            state.completed.push(action.payload);
            state.uncomplete = state.uncomplete.filter(
                (task) => task.id !== action.payload.id
            );
        },
        removeCompletedTask(state, action) {
            state.completed = state.completed.filter(
                (task) => task.id !== action.payload
            );
        },
        addUnCompleteTask(state, action) {
            state.uncomplete.push(action.payload);
            state.completed = state.completed.filter(
                (task) => task.id !== action.payload.id
            );
        },
        removeUnCompleteTasks(state, action) {
            state.uncomplete = state.uncomplete.filter(
                (task) => task.id !== action.payload
            );
        },
    },
});

export const {
    addCompletedTask,
    addUnCompleteTask,
    removeCompletedTask,
    removeUnCompleteTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
