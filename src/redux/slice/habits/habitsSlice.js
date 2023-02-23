import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habitsList: [],
};

const habtisSlice = createSlice({
    name: "habits",
    initialState: initialState,
    reducers: {
        addhabitList(state, action) {},
        updateHabitList(state, action) {
            state.habitsList.unshift(action.payload);
        },
        loadHabitList(state, action) {},
        createHabitList(state, action) {
            state.habitsList = action.payload;
        },

        resetHabits() {},
        reset(state) {
            state = initialState;
        },

        removeHabit(state, action) {},
        remove(state, action) {
            state.habitsList = action.payload;
        },

        setCompletionCounter(action, payload) {},
        updateCompletionCounter(state, action) {
            state.habitsList = action.payload;
        },
    },
});

export const {
    removeHabit,
    remove,
    resetHabits,
    reset,
    loadHabitList,
    createHabitList,
    addhabitList,
    updateHabitList,
    setCompletionCounter,
    updateCompletionCounter,
} = habtisSlice.actions;
export default habtisSlice.reducer;
