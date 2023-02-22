import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text } from "react-native";
import { View } from "react-native-animatable";
import AnimatedTyping from "../AnimatedTyping";
import Icon, { icons } from "../ChooseIcon/Icon";

const HabitItem = ({ habitData }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() =>
                navigation.navigate("HabitsDetail", { habitData: habitData })
            }
            className="relative  my-2 bg-slate-100 rounded-2xl p-4 flex-row justify-start items-center"
        >
            {/* <View
                style={{
                    borderColor: habitData.color,
                    borderWidth: 1,
                }}
                className="absolute top-0 right-0 rounded-full  p-4 z-10 "
            >
                <Icon
                    name={icons[habitData.icon]}
                    size={10}
                    color={habitData.color}
                ></Icon>
            </View> */}
            <View
                style={{ backgroundColor: habitData.color }}
                className="relative w-[100px] h-[100px] p-2 rounded-2xl"
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
