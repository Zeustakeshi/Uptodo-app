import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slice/tasks/tasksSlice";
import userReducer from "./slice/user/userSlice";
import createSagaMiddleware from "redux-saga";
import helloSlice from "./slice/test/helloSlice";
import helloSaga from "./slice/test/helloSaga";
import rootSaga from "./rootSaga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: tasksSlice,
        hello: helloSlice,
    },
    middleware: (gDM) => gDM({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
