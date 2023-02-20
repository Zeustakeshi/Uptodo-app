import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { colors } from "../../const";
import * as Animatable from "react-native-animatable";
import AnimatedTyping from "../AnimatedTyping";

const SearchTask = () => {
    const navigation = useNavigation();

    return (
        <View className="mb-5">
            <View className="flex-row relative h-[48px]">
                <Animatable.View
                    animation="rubberBand"
                    iterationCount={1}
                    className="absolute top-3 left-3 justify-center items-center"
                >
                    <Feather name="search" size={24} color={colors.primary} />
                </Animatable.View>
                <Pressable
                    onPress={() => navigation.navigate("Search")}
                    className="pl-[48px] flex-1 border border-primary rounded-2xl items-start justify-center"
                >
                    <AnimatedTyping
                        animatedTime={30}
                        text="Search for your tasks or habits ..."
                        className="text-gray-400"
                    />
                </Pressable>
            </View>
        </View>
    );
};

export default SearchTask;
