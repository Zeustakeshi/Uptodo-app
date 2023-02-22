import { createContext, useContext, useState } from "react";
import { addhabitList } from "../redux/slice/habits/habitsSlice";

const HabitsDetailContext = createContext();

const HabitDetalisProvider = ({ habitData, ...props }) => {
    const [timeHabit, setTimeHabit] = useState({
        type: "weekly", // "monthly"
        days: [0, 1, 2, 3, 4, 5, 6],
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
