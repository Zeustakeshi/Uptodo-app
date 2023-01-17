import { all, fork } from "redux-saga/effects";
import tasksSaga from "./slice/tasks/tasksSaga";
import helloSaga from "./slice/test/helloSaga";
import userSaga from "./slice/user/userSaga";

export default function* rootSaga() {
    yield all([fork(helloSaga), fork(userSaga), fork(tasksSaga)]);
}
