import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import * as Progress from "react-native-progress";

const defaultTime = 0.6;

const CountTime2 = ({ desc }) => {
    const [focusTime, setFocusTime] = useState(0);

    useEffect(() => {}, []);

    return (
        <View className="mt-5">
            <View className="flex-row justify-center items-center relative">
                <Progress.Circle
                    size={200}
                    // progress={elapsedTime / (defaultTime * 60)}
                    animated
                    color="#6651f0"
                    unfilledColor="#eee"
                    // formatText={() => formatElapsedTime(elapsedTime)}
                    showsText={true}
                    strokeCap="round"
                    className="relative text-sm"
                    borderWidth={0}
                />
            </View>
            {desc}
            <View className="items-center my-8">
                <TouchableHighlight
                    // onPress={hanldePress}
                    className="bg-primary rounded-lg"
                >
                    <Text className="text-white font-bold text-lg px-5 py-3 bg-primary rounded-lg">
                        Start
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default CountTime2;
