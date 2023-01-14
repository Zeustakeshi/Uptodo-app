import React from "react";
import { Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchTask = () => {
    return (
        <View className="flex-row relative h-[48px]">
            <View className="absolute top-3 left-3 justify-center items-center">
                <Feather name="search" size={24} color="#d1d5db" />
            </View>
            <TextInput
                selectionColor="#6651f0"
                className="pl-[48px] flex-1 border border-gray-200 rounded-md"
                placeholder="Search for your task..."
            />
        </View>
    );
};

export default SearchTask;
