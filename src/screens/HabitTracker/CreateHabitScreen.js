import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useRef } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-animatable";
import uuid from "react-native-uuid";
import {
    koalaDrinkWater,
    koalaEat,
    koalaEgg,
    koalaGetUp,
    koalaGoToBed,
    koalaPlaySport,
    koalaReadBook,
} from "../../../assets";
import HabitItem from "../../components/Habits/HabitItem";
import LayoutAuth from "../../components/Layout/LayoutAuth";

const habitsSuggest = [
    {
        id: uuid.v4(),
        icon: "drink",
        title: "Drinking water",
        desc: "description",
        color: "#3b82f6",
        imgUrl: koalaDrinkWater,
    },
    {
        id: uuid.v4(),
        icon: "drink",
        title: "Going to bed early",
        desc: "description",
        color: "#4f46e5",
        imgUrl: koalaGoToBed,
    },
    {
        id: uuid.v4(),
        icon: "drink",
        title: "Eating healthy",
        desc: "description",
        color: "#16a34a",
        imgUrl: koalaEat,
    },
    {
        id: uuid.v4(),
        icon: "drink",
        title: "Waking up early",
        desc: "description",
        color: "#fbbf24",
        imgUrl: koalaGetUp,
    },
    {
        id: uuid.v4(),
        icon: "Playing sports",
        title: "Playing sports",
        desc: "description",
        color: "#10b981",
        imgUrl: koalaPlaySport,
    },
    {
        id: uuid.v4(),
        icon: "read book",
        title: "Reading books",
        desc: "description",
        color: "#f97316",
        imgUrl: koalaReadBook,
    },
];

const CreateHabitScreen = () => {
    const navigation = useNavigation();

    const moveToDetailScreen = (newHabit) => {
        navigation.navigate("CreateHabitDetail", {
            newHabitInfo: newHabit,
        });
    };

    return (
        <LayoutAuth title="Create New Habit">
            <View className="my-3 ">
                {/* Habit tile and desc */}
                <CreateNewHabit
                    onCreateHabit={(habitTitle, habitDesc) =>
                        moveToDetailScreen(habitTitle, habitDesc)
                    }
                ></CreateNewHabit>
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
                                <HabitItem
                                    onPress={() =>
                                        moveToDetailScreen(habitItem)
                                    }
                                    key={habitItem.id}
                                    data={habitItem}
                                />
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

    const habitTitleRef = useRef(null);

    const hanldeCreateHabit = () => {
        if (!habitTitle.trim()) {
            habitTitleRef.current.focus();
            return;
        }
        const newHabit = {
            id: uuid.v4(),
            icon: "no icon",
            title: habitTitle,
            desc: habitDesc,
            color: "#10b981",
            imgUrl: koalaEgg,
        };
        onCreateHabit(newHabit);
        setHabitTitle("");
        setHabitDesc("");
    };

    return (
        <View>
            <View className="flex-row w-full justify-start items-center">
                <TextInput
                    ref={habitTitleRef}
                    value={habitTitle}
                    onChangeText={(text) => setHabitTitle(text)}
                    selectionColor="#6651f0"
                    placeholder="Habit Title"
                    autoFocus
                    placeholderTextColor="#9ca3af"
                    className="flex-1 border-l border-gray-200 px-3 py-1 text-base "
                ></TextInput>
                <TouchableOpacity onPress={hanldeCreateHabit}>
                    <AntDesign name="arrowright" size={24} color="#6651f0" />
                </TouchableOpacity>
            </View>
            <TextInput
                value={habitDesc}
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
