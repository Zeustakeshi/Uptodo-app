import React from "react";
import { Image, Text } from "react-native";
import { View } from "react-native-animatable";
import { koalaEgg } from "../../../assets";
const HabitItem = () => {
    return (
        <View className="p-3 rounded-xl mx-auto bg-gray-100  w-full flex-row justify-between items-center ">
            <View className="rounded-xl p-2 w-[80px] h-[80px] bg-orange-500">
                <Image
                    source={koalaEgg}
                    className="w-full h-full"
                    resizeMode="contain"
                />
            </View>
            <View className="flex-1 justify-start items-start px-2">
                <Text className="font-medium text-lg ">Learning c++</Text>
                <Text className="font-medium text-sm ">Desc</Text>
            </View>
        </View>
    );
};

export default HabitItem;
