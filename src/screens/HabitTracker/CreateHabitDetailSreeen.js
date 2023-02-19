import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import * as Animatable from "react-native-animatable";
import { calendar, calendar2 } from "../../../assets";
import CalendarWeek from "../../components/Calendars/CalendarWeek";
import { useState } from "react";
import CalendarMonth from "../../components/Calendars/CalendarMonth";
import { Entypo } from "@expo/vector-icons";

const CreateHabitDetailSreeen = ({ route }) => {
    const habitData = route?.params?.newHabitInfo;

    return (
        <LayoutAuth title={habitData.title}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="flex-1 w-full h-full "
            >
                <View className="">
                    {/* banner */}
                    <Animatable.View
                        animation="bounceIn"
                        easing="ease-in-out"
                        iterationCount={1}
                        style={{ backgroundColor: habitData.color }}
                        className={`w-full h-[150px] rounded-xl p-3`}
                    >
                        <Image
                            className="w-full h-full"
                            resizeMode="contain"
                            source={habitData.imgUrl}
                        />
                    </Animatable.View>
                    {/* select time*/}
                    <ScheduleTime />
                    {/* Daily completion count */}
                    <DailyCompletionCount />
                    {/*  */}
                </View>
            </ScrollView>
        </LayoutAuth>
    );
};

const ScheduleTime = () => {
    return (
        <View className="my-4">
            <Text className="text-lg font-medium my-3">Schedule Your Time</Text>
            {/* weekly */}
            <ScheduleTimeWeekly />
            {/*monthly*/}
            <ScheduleTimeMonthly />
        </View>
    );
};

const ScheduleTimeWeekly = () => {
    const [showCalendar, setShowcalendar] = useState(false);

    if (showCalendar) {
        return (
            <View className="h-[90px] my-2">
                <CalendarWeek
                    showControl
                    onCancel={() => setShowcalendar(false)}
                    onSave={() => setShowcalendar(false)}
                />
            </View>
        );
    } else {
        return (
            <TouchableOpacity
                onPress={() => setShowcalendar(!showCalendar)}
                className="my-1"
            >
                <View className="flex-row justify-start items-start w-full h-[90px] p-4 bg-gray-100 rounded-xl">
                    <View className="flex-1 w-full">
                        <Text className="font-bold text-base text-primary">
                            Weekly
                        </Text>
                        <Text className="py-1  text-text-color text-sm">
                            choose days of the week
                        </Text>
                    </View>
                    <Image
                        className="w-[30%] h-full"
                        resizeMode="contain"
                        source={calendar}
                    ></Image>
                </View>
            </TouchableOpacity>
        );
    }
};

const ScheduleTimeMonthly = () => {
    const [showCalendar, setShowcalendar] = useState(false);

    if (showCalendar) {
        return (
            <View className=" my-2">
                <CalendarMonth
                    showControl
                    onCancel={() => setShowcalendar(false)}
                    onSave={() => setShowcalendar(false)}
                />
            </View>
        );
    } else {
        return (
            <TouchableOpacity
                onPress={() => setShowcalendar(true)}
                className="my-1"
            >
                <View className="flex-row justify-start items-start w-full h-[90px] p-4 bg-gray-100 rounded-xl">
                    <View className="flex-1 w-full">
                        <Text className="font-bold text-base text-primary">
                            Monthly
                        </Text>
                        <Text className="py-1  text-text-color text-sm">
                            choose days of the months
                        </Text>
                    </View>
                    <Image
                        className="w-[30%] h-full"
                        resizeMode="contain"
                        source={calendar2}
                    ></Image>
                </View>
            </TouchableOpacity>
        );
    }
};

const DailyCompletionCount = () => {
    const [counter, setCounter] = useState(1);

    return (
        <View className="">
            <Text className="mb-5 text-lg font-medium">
                Daily completion count
            </Text>
            <View className="flex-row gap-3 justify-center items-center">
                <TouchableOpacity
                    onPress={() =>
                        setCounter((prev) => {
                            if (prev > 1) return prev - 1;
                            return prev;
                        })
                    }
                    className="p-2 bg-primary rounded-full"
                >
                    <Entypo name="minus" size={24} color="#fff" />
                </TouchableOpacity>

                <Animatable.Text className=" rounded-lg py-4 px-10 bg-gray-100 text-2xl font-semibold text-primary">
                    {counter}
                </Animatable.Text>

                <TouchableOpacity
                    onPress={() => setCounter((prev) => prev + 1)}
                    className="p-2 bg-primary rounded-full"
                >
                    <Entypo name="plus" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CreateHabitDetailSreeen;
