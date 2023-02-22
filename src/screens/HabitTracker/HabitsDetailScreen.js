import { Feather, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { useState } from "react";
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useDispatch } from "react-redux";
import AnimatedTyping from "../../components/AnimatedTyping";
import HabitBanner from "../../components/Habits/HabitBanner";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import { dayNamesShort, hexToRgba } from "../../const";
import { HabitDetalisProvider } from "../../context/habitdetailsContext";
import { setCompletionCounter } from "../../redux/slice/habits/habitsSlice";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const HabitsDetailScreen = ({ route }) => {
    const habitData = route?.params?.habitData;

    return (
        <LayoutAuth>
            <HabitView habitData={habitData} />
        </LayoutAuth>
    );
};

const HabitView = ({ habitData }) => {
    const dispatch = useDispatch();

    const data = {
        labels:
            habitData.timeHabit.type === "weekly"
                ? habitData.timeHabit.days.map(
                      (time) => dayNamesShort[time.day]
                  )
                : habitData.timeHabit.days.map((time) => time.day + 1),
        datasets: [
            {
                data:
                    habitData.timeHabit.type === "weekly"
                        ? habitData.timeHabit.days.map(
                              (time) => time.completionCounter
                          )
                        : habitData.timeHabit.days.map(
                              (time) => time.completionCounter
                          ),
                color: (opacity = 1) => hexToRgba(habitData.color, opacity), // optional
                strokeWidth: 2, // optional
            },
        ],
        legend: [`Habit of ${habitData.timeHabit.type}`], // optional
    };
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        color: (opacity = 1) => hexToRgba(habitData.color, opacity),
    };

    const handleUpdate = () => {
        dispatch(
            setCompletionCounter({
                id: habitData.id,
                dayIndex: Math.floor(
                    Math.random() * habitData.timeHabit.days.length
                ),
                completionCounter:
                    habitData.timeHabit.days[
                        Math.floor(
                            Math.random() * habitData.timeHabit.days.length
                        )
                    ].completionCounter + 1,
            })
        );
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={sytles.habitView}
            className="w-full flex-1 mx-auto"
        >
            <HabitDetalisProvider habitData={habitData}>
                {/* baner */}
                <HabitBanner
                    color={habitData.color}
                    habitData={habitData}
                    animation="rubberBand"
                />
            </HabitDetalisProvider>
            <Text className="p-4 font-bold text-2xl text-center ">
                {habitData.title}
            </Text>
            <AnimatedTyping
                className="p-2 text-text-color text-center"
                text={`Today you have ${
                    habitData.dailyCompletionCounter -
                    habitData.timeHabit.days[0].completionCounter
                } unfinished`}
            />

            <Text className="my-5 font-semibold text-lg">Analytics</Text>
            <ScrollView
                className="w-full max-h-[350px] min-h-[350px] "
                horizontal
                nestedScrollEnabled
            >
                <LineChart
                    data={data}
                    width={windowWidth + 200}
                    height={300}
                    chartConfig={chartConfig}
                />
            </ScrollView>
            {/* Action */}
            <HabitAction habitData={habitData} />
        </ScrollView>
    );
};

const HabitAction = ({ habitData }) => {
    const [isPause, setIsPause] = useState(false);
    const [isStop, setIsStop] = useState(false);

    const handlePauseHabit = () => {
        setIsPause((prev) => !prev);
    };

    const handleStopHabit = () => {
        setIsStop((prev) => !prev);
    };

    return (
        <View className="mb-20 justify-center">
            <Text className="font-semibold text-lg">Habit Setting</Text>
            <View className=" my-5 px-2 justify-center flex-row items-center">
                <TouchableOpacity
                    onPress={handlePauseHabit}
                    style={{ backgroundColor: habitData.color }}
                    className="my-2 flex-row justify-start items-center mr-6 px-3 py-2 bg-primary rounded-lg"
                >
                    {isPause ? (
                        <Feather name="play-circle" size={24} color="white" />
                    ) : (
                        <FontAwesome5
                            name="pause-circle"
                            size={24}
                            color="white"
                        />
                    )}
                    <Text className="font-semibold text-white ml-2">
                        {`${isPause ? "Continue Habit" : "Pause Habit"}`}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleStopHabit}
                    style={{ backgroundColor: habitData.color }}
                    className="my-2 flex-row justify-start items-center px-3 py-2 bg-primary rounded-lg"
                >
                    <FontAwesome5 name="flag" size={24} color="white" />
                    <Text className=" font-semibold text-white ml-2">
                        Stop habit
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text className="p-4 text-center font-semibold text-red-500 text-base">
                    Delete habit
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const sytles = StyleSheet.create({
    habitView: {
        height: windowHeight - 72,
        width: windowWidth - 48,
        flex: 1,
    },
});

export default HabitsDetailScreen;
