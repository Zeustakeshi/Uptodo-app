import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import appSlice from "./slice/App/appSlice";
import habitsSlice from "./slice/habits/habitsSlice";
import tasksSlice from "./slice/tasks/tasksSlice";
import helloSlice from "./slice/test/helloSlice";
import userSlide from "./slice/user/userSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        app: appSlice,
        user: userSlide,
        tasks: tasksSlice,
        habits: habitsSlice,
        hello: helloSlice,
    },
    middleware: (gDM) => gDM({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
