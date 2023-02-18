import { all, fork } from "redux-saga/effects";
import appSaga from "./slice/App/appSaga";
import tasksSaga from "./slice/tasks/tasksSaga";
import helloSaga from "./slice/test/helloSaga";
import userSaga from "./slice/user/userSaga";

export default function* rootSaga() {
    yield all([
        fork(appSaga),
        fork(helloSaga),
        fork(userSaga),
        fork(tasksSaga),
    ]);
}
