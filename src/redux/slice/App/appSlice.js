import { createSlice } from "@reduxjs/toolkit";
import { validateEmail, validatePassword } from "../../../const";

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
        resetAppSetting() {},
        reset(state) {
            state = initialState;
        },

        /** FOCUS SETTING*/
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
    setFocusTime,
    updateFocusTime,
    setFocusTimeRelax,
    updateFocusTimeRelax,
    setFocusShowUnCompleteTask,
    updateFocusShowUnCompleteTask,
} = appSlice.actions;
export default appSlice.reducer;
