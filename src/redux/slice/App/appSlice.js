import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "light",
    font: "roboto",
    lang: "en",
    color: {
        primary: "#6651f0",
        secondary: "#BF88EC",
    },
    notify: false,
    focusSetting: {
        runInTheBackground: false,
        timeFocus: {
            option: [60, 120, 180],
            currentOption: 60,
        },
        timeRelax: {
            option: [5, 10, 15, 20],
            currentOption: 5,
        },
        notify: false,
        music: {
            enable: false,
            musics: ["music1", "music1"],
            currentMusic: "music1",
        },
        showUnCompleteTask: true,
    },
};

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        loadSetting(state, action) {},
        updateSetting(state, action) {
            state = {
                ...initialState,
                ...action.payload,
            };
        },

        resetAppSetting() {},
        reset(state) {
            state = initialState;
        },

        /** FOCUS SETTING*/
        loadFocusSetting(state, action) {},
        updateFocusSetting(state, action) {
            state.focusSetting = { ...state.focusSetting, ...action.payload };
        },
        setFocusTime(state, action) {},
        updateFocusTime(state, action) {
            state.focusSetting.timeFocus.currentOption = action.payload;
        },
        setFocusTimeRelax(state, action) {},
        updateFocusTimeRelax(state, action) {
            state.focusSetting.timeRelax.currentOption = action.payload;
        },
        setFocusShowUnCompleteTask(state, action) {},
        updateFocusShowUnCompleteTask(state, action) {
            state.focusSetting.showUnCompleteTask = action.payload;
        },
    },
});

export const {
    reset,
    resetAppSetting,
    loadSetting,
    updateSetting,
    loadFocusSetting,
    updateFocusSetting,
    setFocusTime,
    updateFocusTime,
    setFocusTimeRelax,
    updateFocusTimeRelax,
    setFocusShowUnCompleteTask,
    updateFocusShowUnCompleteTask,
} = appSlice.actions;
export default appSlice.reducer;
