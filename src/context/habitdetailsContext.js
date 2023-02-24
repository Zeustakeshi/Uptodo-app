import { createContext, useContext, useState } from "react";
import { addhabitList } from "../redux/slice/habits/habitsSlice";

const HabitsDetailContext = createContext();

const HabitDetalisProvider = ({ habitData, ...props }) => {
    const [timeHabit, setTimeHabit] = useState({
        type: "weekly", // "monthly"
        days: [
            { day: 0, completionCounter: 0 },
            { day: 1, completionCounter: 0 },
            { day: 2, completionCounter: 0 },
            { day: 3, completionCounter: 0 },
            { day: 4, completionCounter: 0 },
            { day: 5, completionCounter: 0 },
            { day: 6, completionCounter: 0 },
        ],
    });
    const [dailyCompletionCounter, setDailyCompletionCounter] = useState(1);
    const [color, setColor] = useState(habitData.color);
    const [icon, setIcon] = useState(habitData.icon);

    //handler

    const values = {
        icon,
        color,
        timeHabit,
        dailyCompletionCounter,
        setIcon,
        setColor,
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
