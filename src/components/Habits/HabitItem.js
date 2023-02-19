import React from "react";
import { Image, Text, TouchableHighlight } from "react-native";
import { View } from "react-native-animatable";
import * as Animatable from "react-native-animatable";

const HabitItem = ({ data, onPress }) => {
    return (
        <TouchableHighlight
            style={{ backgroundColor: data.color }}
            className={`h-[100px] bg-blue-200 rounded-2xl p-2 mb-4`}
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
        </TouchableHighlight>
    );
};

export default HabitItem;
