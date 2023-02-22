import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { homeTask } from "../../../assets";
import * as Animatable from "react-native-animatable";
import AnimatedTyping from "../AnimatedTyping";

const EmptyTask = () => {
    return (
        <View className="flex-1 w-full justify-center items-center">
            <View className="w-[227px] h-[227px]">
                <Animatable.Image
                    animation="rubberBand"
                    easing="ease-in-out"
                    iterationCount={1}
                    className="w-full h-full object-cover "
                    source={homeTask}
                />
            </View>

            <View className="justify-center items-center mt-3 gap-y-2">
                <AnimatedTyping
                    className="text-xl font-normal text-text-color"
                    text="What do you want to do today?"
                />

                <View className="flex-row gap-x-2 items-center">
                    <Text className="text-base text-gray-800">Tap</Text>
                    <Animatable.View
                        animation="jello"
                        easing="ease-in-out"
                        iterationCount="infinite"
                        className="bg-primary rounded-full p-1"
                    >
                        <Entypo
                            name="circle-with-plus"
                            size={24}
                            color="#fff"
                        />
                    </Animatable.View>
                    <Text className="text-base text-gray-800">
                        to add your tasks
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default EmptyTask;
