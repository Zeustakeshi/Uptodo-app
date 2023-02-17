import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableHighlight } from "react-native";
import { View } from "react-native-animatable";
import * as Progress from "react-native-progress";

const defaultTime = 0.5;

const CountTime = ({ desc }) => {
    const [focuse, setFocuse] = useState({
        inProcess: false,
        isFirstStart: true,
    });
    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalRef = useRef();
    const prevElapsedTimeRef = useRef();

    useEffect(() => {
        return () => {
            console.log("clean up is running ");
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        if (elapsedTime / (1000 * 60) >= defaultTime) {
            clearInterval(intervalRef.current);
            setFocuse({ inProcess: false, isFirstStart: true });
            // console.log("handleSuccessCalled");
        }
    }, [elapsedTime]);

    const handleCountTime = () => {
        setElapsedTime((prevElapsedTime) => {
            prevElapsedTimeRef.current = prevElapsedTime;
            return prevElapsedTime + 1000;
        });
    };
    const hanldePress = () => {
        if (focuse.isFirstStart) {
            //handle start
            setElapsedTime(0);
            prevElapsedTimeRef.current = elapsedTime;

            intervalRef.current = setInterval(handleCountTime, 1000);
            setFocuse((prev) => {
                return { ...prev, isFirstStart: false, inProcess: true };
            });
        } else if (focuse.inProcess) {
            // hanlse pause
            clearInterval(intervalRef.current);
            setFocuse((prev) => {
                return { ...prev, inProcess: false };
            });
        } else if (!focuse.isFirstStart && !focuse.inProcess) {
            // handle resume
            intervalRef.current = setInterval(handleCountTime, 1000);
            setFocuse((prev) => {
                return { ...prev, inProcess: true };
            });
        }
    };

    return (
        <View className="mt-5">
            <View className="flex-row justify-center items-center relative">
                <Progress.Circle
                    size={200}
                    progress={elapsedTime / 60000 / defaultTime}
                    animated
                    color="#6651f0"
                    unfilledColor="#eee"
                    formatText={() => elapsedTime / 1000}
                    showsText={true}
                    strokeCap="round"
                    className="relative text-sm"
                    borderWidth={0}
                />
            </View>
            {desc}
            <View className="items-center my-8">
                <TouchableHighlight
                    onPress={hanldePress}
                    className="bg-primary rounded-lg"
                >
                    <Text className="text-white font-bold text-lg px-5 py-3 bg-primary rounded-lg">
                        {focuse.isFirstStart
                            ? "Start Focus"
                            : focuse.inProcess
                            ? "Plause"
                            : "Resume"}
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default CountTime;
