import axios from "axios";
import { call, put } from "redux-saga/effects";
import { setNews } from "./helloSlice";
import storedHello from "./stored";

const request = () => {
    return axios.request({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/",
    });
};

export default function* handleStoredHello(action) {
    try {
        yield put(setNews(action.payload));
    } catch (error) {
        console.log(error);
    }
}
