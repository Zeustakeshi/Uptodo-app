import { useState } from "react";
import { createContext, useContext } from "react";

const HabitsDetailContext = createContext();

const HabitDetalisProvider = (props) => {
    const [timeHabit, setTimeHabit] = useState({
        type: "weekly", // "monthly"
        days: [],
    });
    const [dailyCompletionCounter, setDailyCompletionCounter] = useState(1);
    const values = {
        timeHabit,
        dailyCompletionCounter,
        setDailyCompletionCounter,
        setTimeHabit,
    };
    return (
        <HabitsDetailContext.Provider
            value={values}
            {...props}
        ></HabitsDetailContext.Provider>
    );
};

const useHabitDetail = () => {
    const context = useContext(HabitsDetailContext);
    if (typeof context === "undefined")
        throw new Error(
            "useHabitDetail must be used within HabitDetalisProvider"
        );
    return context;
};

export { useHabitDetail, HabitDetalisProvider };
