import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text } from "react-native";
import { View } from "react-native-animatable";
import AnimatedTyping from "../AnimatedTyping";

const HabitItem = ({ habitData }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() =>
                navigation.navigate("HabitsDetail", { habitData: habitData })
            }
            className=" my-2 bg-slate-100 rounded-2xl p-4 flex-row justify-start items-center"
        >
            <View
                style={{ backgroundColor: habitData.color }}
                className="w-[100px] h-[100px] p-2 rounded-2xl"
            >
                <Image
                    className="w-full h-full"
                    source={habitData.imgUrl}
                    resizeMode="contain"
                />
            </View>
            <View className="p-3 h-[100px] ">
                <Text
                    numberOfLines={1}
                    className="text-base font-semibold text-text-color py-2"
                >
                    {habitData.title}
                </Text>
                <AnimatedTyping
                    className="text-slate-500 text-xs"
                    numberOfLines={2}
                    text={`Today you have ${
                        habitData.dailyCompletionCounter -
                        habitData.timeHabit.days[0].completionCounter
                    } unfinished`}
                />
            </View>
        </Pressable>
    );
};

export default HabitItem;
