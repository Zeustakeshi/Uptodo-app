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
            state.habitsList.push(action.payload);
        },
        setCompletionCounter(action, payload) {},
        updateCompletionCounter(state, action) {
            const { id, dayIndex, completionCounter } = action.payload;
            const targetHabit = state.habitsList.find(
                (habit) => habit.id === id
            );
            targetHabit.timeHabit.days[dayIndex].completionCounter =
                completionCounter;
        },
    },
});

export const {
    addhabitList,
    updateHabitList,
    setCompletionCounter,
    updateCompletionCounter,
} = habtisSlice.actions;
export default habtisSlice.reducer;
