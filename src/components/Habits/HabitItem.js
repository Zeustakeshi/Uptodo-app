import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

const HabitItem = ({ data, onPress, props }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ backgroundColor: data.color }}
            className={`h-[100px] bg-blue-200 rounded-2xl p-2 mb-4`}
            {...props}
        >
            <Animatable.View
                animation="bounceIn"
                easing="ease-in-out"
                iterationCount={1}
                className=" flex-row w-full h-full justify-end items-start"
            >
                <Text className="px-2 flex-1 text-center font-semibold text-base text-white  ">
                    {data.title}
                </Text>
                <Image
                    className="w-[50%] h-full"
                    resizeMode="contain"
                    source={data.imgUrl}
                />
            </Animatable.View>
        </TouchableOpacity>
    );
};

export default HabitItem;
