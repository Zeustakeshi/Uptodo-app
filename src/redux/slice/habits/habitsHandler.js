import AsyncStorage from "@react-native-async-storage/async-storage";
import { put, select } from "redux-saga/effects";
import { reset, updateCompletionCounter, updateHabitList } from "./habitsSlice";

export function* handleAddhabitList(action) {
    yield AsyncStorage.setItem(
        `habit-${action.payload.id}`,
        JSON.stringify(action.payload)
    );
    yield put(updateHabitList(action.payload));
}

export function* habdleUpdateCompletionCounter(action) {
    const { habitsList } = yield select((state) => state.habits);
    const { id, dayIndex, completionCounter } = action.payload;

    const newHabitList = habitsList.map((habit) => {
        if (habit.id === id) {
            const newDays = habit.timeHabit.days.map((time) => {
                if (time.day === dayIndex) {
                    return { ...time, completionCounter: completionCounter };
                } else {
                    return time;
                }
            });
            return {
                ...habit,
                timeHabit: {
                    ...habit.timeHabit,
                    days: newDays,
                },
            };
        } else {
            return habit;
        }
    });
    const targetHabit = newHabitList.find((habit) => habit.id === id);

    yield AsyncStorage.setItem(`habit-${id}`, JSON.stringify(targetHabit));
    yield put(updateCompletionCounter(newHabitList));
}

export function* handleResethabits(action) {
    // remove from storage
    const keys = yield AsyncStorage.getAllKeys();
    if (keys.length != 0) {
        yield AsyncStorage.multiRemove(
            keys.filter((key) => key.includes("habit-"))
        );
    }
    // remove from store
    yield put(reset());
}
