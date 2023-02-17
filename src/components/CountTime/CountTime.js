import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableHighlight } from "react-native";
import { View } from "react-native-animatable";
import * as Progress from "react-native-progress";

const defaultFocusTime = 1;
const defaultRelaxTime = 0.5;
let initialElapsedTime = 0;
const CountTime = ({ desc }) => {
    const [focus, setFocus] = useState({
        inProcess: false,
        isFirstStart: true,
    });
    const [elapsedTime, setElapsedTime] = useState(0);
    const [mode, setMode] = useState("focus"); // focus | relax

    const intervalRef = useRef();
    const prevElapsedTimeRef = useRef();

    useEffect(() => {
        return () => {
            initialElapsedTime = 0;
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        if (mode === "focus" && elapsedTime / 60000 >= defaultFocusTime) {
            clearInterval(intervalRef.current);
            setFocus({ inProcess: false, isFirstStart: true });
            initialElapsedTime = 0;
            alert("You are completed focus today");
            // console.log("handleSuccessCalled");
        } else if (
            mode === "relax" &&
            elapsedTime / 60000 >= defaultRelaxTime
        ) {
            clearInterval(intervalRef.current);
            setFocus({ inProcess: false, isFirstStart: false });
            alert("Time relax end go to focus now :))))))");
        }
    }, [elapsedTime]);

    const handleCountTime = () => {
        setElapsedTime((prevElapsedTime) => {
            prevElapsedTimeRef.current = prevElapsedTime;
            return prevElapsedTime + 1000;
        });
    };
    const hanldePress = () => {
        if (focus.isFirstStart) {
            //handle start
            setElapsedTime(initialElapsedTime);
            prevElapsedTimeRef.current = elapsedTime;
            intervalRef.current = setInterval(handleCountTime, 1000);
            setFocus((prev) => {
                return { ...prev, isFirstStart: false, inProcess: true };
            });
        } else if (focus.inProcess) {
            // hanlse pause
            clearInterval(intervalRef.current);
            initialElapsedTime = elapsedTime;
            setElapsedTime(0);
            setMode("relax");
            setFocus((prev) => {
                return { ...prev, inProcess: false };
            });
            intervalRef.current = setInterval(handleCountTime, 1000);
        } else if (!focus.isFirstStart && !focus.inProcess) {
            // handle resume
            clearInterval(intervalRef.current);
            setElapsedTime(initialElapsedTime);
            setMode("focus");
            setFocus((prev) => {
                return { ...prev, inProcess: true };
            });
            intervalRef.current = setInterval(handleCountTime, 1000);
        }
    };

    return (
        <View className="mt-5">
            <View className="flex-row justify-center items-center relative">
                <Progress.Circle
                    size={200}
                    progress={
                        mode === "focus"
                            ? elapsedTime / 60000 / defaultFocusTime
                            : elapsedTime / 60000 / defaultRelaxTime
                    }
                    animated
                    color={mode === "focus" ? "#6651f0" : "#10b981"}
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
                    <Text className="text-white font-bold text-base px-5 py-3 bg-primary rounded-lg">
                        {focus.isFirstStart
                            ? "Start Focus"
                            : focus.inProcess
                            ? "Take a short 5-minute break"
                            : "Continue to focus"}
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

export default CountTime;
