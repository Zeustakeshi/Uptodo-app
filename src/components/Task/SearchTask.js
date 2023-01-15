import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchTask = () => {
    const navigation = useNavigation();

    return (
        <View className="mb-5">
            <View className="flex-row relative h-[48px]">
                <View className="absolute top-3 left-3 justify-center items-center">
                    <Feather name="search" size={24} color="#d1d5db" />
                </View>
                <Pressable
                    onPress={() => navigation.navigate("Search")}
                    className="pl-[48px] flex-1 border border-gray-200 rounded-md items-start justify-center"
                >
                    <Text className="text-gray-400">
                        Search for your task...
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SearchTask;
