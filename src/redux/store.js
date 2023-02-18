import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import appSlice from "./slice/App/appSlice";
import tasksSlice from "./slice/tasks/tasksSlice";
import helloSlice from "./slice/test/helloSlice";
import userSlide from "./slice/user/userSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        app: appSlice,
        user: userSlide,
        tasks: tasksSlice,
        hello: helloSlice,
    },
    middleware: (gDM) => gDM({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
