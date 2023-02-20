import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { calendar, calendar2 } from "../../../assets";
import AnimatedTyping from "../../components/AnimatedTyping";
import CalendarMonth from "../../components/Calendars/CalendarMonth";
import CalendarWeek from "../../components/Calendars/CalendarWeek";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import { dayNamesShort } from "../../const";
import {
    HabitDetalisProvider,
    useHabitDetail,
} from "../../context/habitdetailsContext";

const CreateHabitDetailSreeen = ({ route }) => {
    const habitData = route?.params?.newHabitInfo;

    return (
        <LayoutAuth title={habitData.title}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="flex-1 w-full h-full "
            >
                <HabitDetalisProvider>
                    <View className="mb-20">
                        {/* banner */}
                        <Banner habitData={habitData} />
                        {/* show user chosen */}
                        <ShowUserChosen></ShowUserChosen>
                        {/* select time*/}
                        <ScheduleTime />
                        {/* Daily completion count */}
                        <DailyCompletionCount />
                        {/*  */}
                    </View>
                </HabitDetalisProvider>
            </ScrollView>
        </LayoutAuth>
    );
};

const ShowUserChosen = () => {
    const { timeHabit, dailyCompletionCounter } = useHabitDetail();
    if (timeHabit.type === "weekly") timeHabit.days.sort();
    const days = timeHabit.days.map((day) => {
        if (timeHabit.type === "weekly") {
            return dayNamesShort[day];
        } else {
            return day + 1;
        }
    });
    if (days.length === 0) return;
    return (
        <View className="my-4 ">
            <Text className="text-base">
                You have chosen to do this habit every
                {timeHabit.type === "weekly"
                    ? " week on the day : "
                    : " month on the day: "}
                <AnimatedTyping
                    text={`${days.join(", ")}`}
                    className="inline-block text-primary font-bold"
                />
                <Text>
                    .With
                    <Text className="text-primary-pink font-bold">
                        {" "}
                        {dailyCompletionCounter}{" "}
                    </Text>
                    set for each completion.
                </Text>
            </Text>
        </View>
    );
};

const Banner = ({ habitData }) => {
    return (
        <Animatable.View
            animation="bounceIn"
            easing="ease-in-out"
            iterationCount={1}
            style={{ backgroundColor: habitData.color }}
            className={`w-full h-[150px] rounded-xl p-3 relative`}
        >
            <Image
                className="w-full h-full"
                resizeMode="contain"
                source={habitData.imgUrl}
            />
        </Animatable.View>
    );
};

const ScheduleTime = () => {
    return (
        <View className="my-2 mt-0">
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
    const { setTimeHabit } = useHabitDetail();
    const handleSave = (currentChooses) => {
        setTimeHabit({
            type: "weekly",
            days: currentChooses,
        });
        setShowcalendar(false);
    };
    if (showCalendar) {
        return (
            <View className="h-[90px] my-2">
                <CalendarWeek
                    showControl
                    onCancel={() => setShowcalendar(false)}
                    onSave={handleSave}
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
    const { setTimeHabit } = useHabitDetail();
    const handleSave = (currentChooses) => {
        setTimeHabit({
            type: "monthly",
            days: currentChooses,
        });
        setShowcalendar(false);
    };

    if (showCalendar) {
        return (
            <View className=" my-2">
                <CalendarMonth
                    showControl
                    onCancel={() => setShowcalendar(false)}
                    onSave={handleSave}
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
    const { dailyCompletionCounter, setDailyCompletionCounter } =
        useHabitDetail();

    return (
        <View className="">
            <View></View>
            <Text className="mb-5 text-lg font-medium">
                Daily completion count
            </Text>
            <View className="flex-row gap-3 justify-center items-center">
                <TouchableOpacity
                    onPress={() =>
                        setDailyCompletionCounter((prev) => {
                            if (prev > 1) return prev - 1;
                            return prev;
                        })
                    }
                    className="p-2 bg-primary rounded-full"
                >
                    <Entypo name="minus" size={24} color="#fff" />
                </TouchableOpacity>

                <Animatable.Text className=" rounded-lg py-4 px-10 bg-gray-100 text-2xl font-semibold text-primary">
                    {dailyCompletionCounter}
                </Animatable.Text>

                <TouchableOpacity
                    onPress={() =>
                        setDailyCompletionCounter((prev) => prev + 1)
                    }
                    className="p-2 bg-primary rounded-full"
                >
                    <Entypo name="plus" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CreateHabitDetailSreeen;
