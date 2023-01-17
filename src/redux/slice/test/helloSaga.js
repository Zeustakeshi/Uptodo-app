import { all, takeLatest, takeEvery, call } from "redux-saga/effects";
import handleStoredHello from "./handler";
import { getNews, setNews } from "./helloSlice";

export default function* helloSaga() {
    yield takeLatest(getNews.type, handleStoredHello);
}
