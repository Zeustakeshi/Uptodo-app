import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const todayOfWeek = new Date().getDay() - 1;
const todayOfMonth = new Date().getDate() - 1;

const UnfinishedMessage = ({ habitData, fontSize, ...props }) => {
    const [currentCounter, setCurrentCounter] = useState(3);

    useEffect(() => {
        const aa = habitData.timeHabit.days.find(
            (time) => time.day === todayOfWeek
        );

        if (habitData.timeHabit.type === "weekly") {
            const data = habitData.timeHabit.days.find(
                (time) => time.day === todayOfWeek
            );
            if (data) {
                setCurrentCounter(
                    habitData.dailyCompletionCounter - data.completionCounter
                );
            }
        } else {
            const data = habitData.timeHabit.days.find(
                (time) => time.day === todayOfMonth
            );
            if (data) {
                setCurrentCounter(
                    habitData.dailyCompletionCounter - data.completionCounter
                );
            }
        }
    }, [habitData]);

    if (currentCounter <= 0) {
        return (
            <Text
                style={{ fontSize: fontSize }}
                className="text-slate-500 text-xs"
                numberOfLines={2}
                {...props}
            >{`You finished today`}</Text>
        );
    }
    return (
        <Text
            style={{ fontSize: fontSize }}
            className="text-slate-500 text-xs"
            numberOfLines={2}
            {...props}
        >
            Today you have
            <Text className="font-bold text-primary"> {currentCounter} </Text>
            unfinished
        </Text>
    );
};

export default UnfinishedMessage;
