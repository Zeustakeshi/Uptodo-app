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
            icon: "home",
            categrory: {
                title: "University",
                icon: "home",
                color: "#6651f0",
            },
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
            icon: "home",
            categrory: {
                title: "University",
                icon: "home",
                color: "#6651f0",
            },
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
            icon: "home",
            categrory: {
                title: "Home",
                icon: "home",
                color: "#6651f0",
            },
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
            icon: "home",
            categrory: {
                title: "Home",
                icon: "home",
                color: "#6651f0",
            },
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
            icon: "home",
            categrory: {
                title: "Home",
                icon: "home",
                color: "#6651f0",
            },
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
            icon: "home",
            categrory: {
                title: "Home",
                icon: "home",
                color: "#6651f0",
            },
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
            icon: "home",
            categrory: {
                title: "Home",
                icon: "home",
                color: "#6651f0",
            },
            isCompleted: true,
            priority: 1,
        },
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
