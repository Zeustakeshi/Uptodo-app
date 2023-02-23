import { SimpleLineIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useDispatch } from "react-redux";
import { setCompletionCounter } from "../../redux/slice/habits/habitsSlice";
import Icon, { icons } from "../ChooseIcon/Icon";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const todayOfWeek = new Date().getDay() - 1;
const todayOfMonth = new Date().getDate() - 1;

const HabitButton = ({ habitData, showTitle = true, ...props }) => {
    const [currentCounter, setCurrentCounter] = useState(0);

    useEffect(() => {
        if (habitData.timeHabit.type === "weekly") {
            const { completionCounter } = habitData.timeHabit.days.find(
                (time) => time.day === todayOfWeek
            );
            setCurrentCounter(completionCounter);
        } else {
            const { completionCounter } = habitData.timeHabit.days.find(
                (time) => time.day === todayOfMonth
            );

            setCurrentCounter(completionCounter);
        }
    }, [habitData]);
    const dispatch = useDispatch();

    const handleIncreaseCounter = () => {
        if (habitData.timeHabit.type === "weekly") {
            dispatch(
                setCompletionCounter({
                    id: habitData.id,
                    dayIndex: todayOfWeek,
                    completionCounter: currentCounter + 1,
                })
            );
        } else {
            dispatch(
                setCompletionCounter({
                    id: habitData.id,
                    dayIndex: todayOfMonth,
                    completionCounter: currentCounter + 1,
                })
            );
        }

        setCurrentCounter((prev) => prev + 1);
    };

    return (
        <View>
            <Progress.Pie
                progress={currentCounter / habitData.dailyCompletionCounter}
                size={80}
                className="relative justify-center items-center m-1 mx-2 rounded-full"
                unfilledColor="#f1f5f9"
                borderWidth={0}
                color={habitData.color}
            >
                <View className="bg-slate-100 p-[2px] absolute w-[70px] h-[70px] rounded-full justify-center items-center">
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={handleIncreaseCounter}
                        {...props}
                        style={{
                            backgroundColor: habitData.color,
                        }}
                        className="w-full h-full rounded-full bg-blue-500 justify-center items-center"
                    >
                        <Icon color="#fff" name={icons[habitData.icon]}></Icon>
                        <Text className="text-white font-bold text-center text-xs">
                            {currentCounter}/{habitData.dailyCompletionCounter}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Progress.Pie>
            <Text className="py-1 text-center text-xs font-medium">
                {habitData.title}
            </Text>
        </View>
    );
};

export const ButtonAddNewHabit = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("CreateHabit")}
            className="w-[80px] h-[80px] p-1 bg-slate-50 rounded-full justify-center items-center border-2 border-primary"
        >
            <Animatable.View
                animation="swing"
                iterationCount="infinite"
                className="bg-primary w-full h-full rounded-full justify-center items-center"
            >
                <SimpleLineIcons name="energy" size={24} color="#fff" />
            </Animatable.View>
        </TouchableOpacity>
    );
};

export default HabitButton;
