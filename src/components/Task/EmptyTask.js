import React from "react";
import { Image, Text, View } from "react-native";
import { homeTask } from "../../../assets";

const EmptyTask = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <View className="w-[227px] h-[227px]">
                <Image
                    className="w-full h-full object-cover "
                    source={homeTask}
                />
            </View>

            <View className="justify-center items-center mt-3 gap-y-2">
                <Text className="text-xl font-normal text-text-color">
                    What do you want to do today?
                </Text>
                <Text className="text-base text-gray-800">
                    Tap + to add your tasks
                </Text>
            </View>
        </View>
    );
};

export default EmptyTask;
