import React from "react";
import {
    FlatList,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { View, Text } from "react-native-animatable";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import uuid from "react-native-uuid";
import HabitItem from "../../components/Habits/HabitItem";
import {
    koalaDrinkWater,
    koalaEat,
    koalaGetUp,
    koalaGoToBed,
    koalaPlaySport,
    koalaReadBook,
} from "../../../assets";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const habitsSuggest = [
    {
        id: 1,
        icon: "drink",
        title: "Drinking water",
        color: "#3b82f6",
        imgUrl: koalaDrinkWater,
    },
    {
        id: 2,
        icon: "drink",
        title: "Going to bed early",
        color: "#4f46e5",
        imgUrl: koalaGoToBed,
    },
    {
        id: 3,
        icon: "drink",
        title: "Eating healthy",
        color: "#16a34a",
        imgUrl: koalaEat,
    },
    {
        id: 4,
        icon: "drink",
        title: "Waking up early",
        color: "#fbbf24",
        imgUrl: koalaGetUp,
    },
    {
        id: 5,
        icon: "Playing sports",
        title: "Playing sports",
        color: "#10b981",
        imgUrl: koalaPlaySport,
    },
    {
        id: 6,
        icon: "read book",
        title: "Reading books",
        color: "#f97316",
        imgUrl: koalaReadBook,
    },
];

const CreateHabitScreen = () => {
    return (
        <LayoutAuth title="Create New Habit">
            <View className="my-3 ">
                {/* Habit tile and desc */}
                <CreateNewHabit></CreateNewHabit>
                {/* Choose an Activity */}
                <View className="my-5">
                    <Text className="text-text-color font-medium text-base">
                        Choose an{" "}
                        <Text className="font-bold text-primary">
                            Lifestyle Habits
                        </Text>
                    </Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        className=" w-full h-[80%]  my-5"
                    >
                        {habitsSuggest.map((habitItem) => {
                            return (
                                <HabitItem key={uuid.v4()} data={habitItem} />
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        </LayoutAuth>
    );
};

const CreateNewHabit = ({ onCreateHabit = () => {} }) => {
    const [habitTitle, setHabitTitle] = useState("");
    const [habitDesc, setHabitDesc] = useState("");

    return (
        <View>
            <View className="flex-row w-full justify-start items-center">
                <TextInput
                    onChangeText={(text) => setHabitTitle(text)}
                    selectionColor="#6651f0"
                    placeholder="Habit Title"
                    autoFocus
                    placeholderTextColor="#9ca3af"
                    className="flex-1 border-l border-gray-200 px-3 py-1 text-base "
                ></TextInput>
                <TouchableOpacity
                    onPress={() => onCreateHabit(habitTitle, habitDesc)}
                >
                    <AntDesign name="arrowright" size={24} color="#6651f0" />
                </TouchableOpacity>
            </View>
            <TextInput
                onChangeText={(text) => setHabitDesc(text)}
                selectionColor="#6651f0"
                placeholder="Add your habit details "
                placeholderTextColor="#9ca3af"
                className=" border-gray-200 px-4 py-1 text-sm my-2 "
            ></TextInput>
        </View>
    );
};

export default CreateHabitScreen;
