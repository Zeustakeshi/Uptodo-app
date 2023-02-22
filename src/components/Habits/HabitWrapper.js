import React from "react";
import { ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import { useSelector } from "react-redux";
import HabitButton from "./HabitButton";

const todayOfWeek = new Date().getDay();
const todayOfMonth = new Date().getDate();
const HabitWrapper = () => {
    const { habitsList } = useSelector((state) => state.habits);

    return (
        <View className="flex-1">
            <Text className="py-2 text-lg font-semibold text-text-color">
                Your Habits
            </Text>
            <ScrollView horizontal className="rounded-md  ">
                {habitsList.map((habit, index) => {
                    if (
                        habitsList[index].timeHabit.type === "weekly" &&
                        habitsList[index].timeHabit.days.some(
                            (time) => time.day === todayOfWeek - 1
                        )
                    ) {
                        return <HabitButton key={index} habitData={habit} />;
                    } else if (
                        habitsList[index].timeHabit.type === "monthly" &&
                        habitsList[index].timeHabit.days.some(
                            (time) => time.day === todayOfMonth - 1
                        )
                    ) {
                        return <HabitButton key={index} habitData={habit} />;
                    }
                })}
            </ScrollView>
        </View>
    );
};

export default HabitWrapper;
