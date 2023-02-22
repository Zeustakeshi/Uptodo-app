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
            state.habitsList = [action.payload, ...state.habitsList];
        },
        setCompletionCounter(action, payload) {},
        updateCompletionCounter(state, action) {
            const { id, dayIndex, completionCounter } = action.payload;
            state.habitsList = state.habitsList.map((habit) => {
                if ((habit.id = id)) {
                    const newDays = habit.timeHabit.days.map((time) => {
                        if (time.day === dayIndex) {
                            return {
                                ...time,
                                completionCounter: completionCounter,
                            };
                        }
                        return time;
                    });
                    return {
                        ...habit,
                        timeHabit: {
                            ...habit.timeHabit,
                            days: newDays,
                        },
                    };
                }
            });
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
