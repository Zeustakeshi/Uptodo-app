import { createSlice } from "@reduxjs/toolkit";

const helloSlice = createSlice({
    name: "hello",
    initialState: {
        mess: "Hello word",
        errorMess: "",
        hits: [],
    },
    reducers: {
        setNews(state, action) {
            console.log(action.payload);
            state.hits = action.payload;
        },
        getNews() {},
    },
});

export const { getNews, setNews } = helloSlice.actions;
export default helloSlice.reducer;
