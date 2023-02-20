import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    habitsList: [],
};

const habtisSlice = createSlice({
    name: "habits",
    initialState: initialState,
    reducers: {},
});

export const {} = habtisSlice.actions;
export default habtisSlice.reducer;
