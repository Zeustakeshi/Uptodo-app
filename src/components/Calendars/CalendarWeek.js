import React from "react";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { dayNamesShort } from "../../const";
import CalendarDay from "./CalendarDay";

const CalendarWeek = ({
    showControl,
    onSave = () => {},
    onCancel = () => {},
}) => {
    const [currentChooses, setCurrentChooses] = useState([]);

    const handleAddChoosesDay = (index) => {
        setCurrentChooses((prev) => [...prev, index]);
    };

    const handleRemoveChoosesDay = (index) => {
        setCurrentChooses((prev) => prev.filter((item) => item !== index));
    };

    return (
        <View className="w-full">
            <View className="flex-row w-full">
                {dayNamesShort.map((day, index) => {
                    return (
                        <CalendarDay
                            key={index}
                            label={day}
                            onActive={() => handleAddChoosesDay(index)}
                            onRemoveActive={() => handleRemoveChoosesDay(index)}
                        ></CalendarDay>
                    );
                })}
            </View>

            {showControl && (
                <View className="flex-row mt-3 justify-start items-center">
                    <TouchableOpacity
                        className="px-2 py-1 "
                        onPress={() => onCancel()}
                    >
                        <Text>cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="px-2 py-1"
                        onPress={() => onSave(currentChooses)}
                    >
                        <Text className="font-medium text-primary">save</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default CalendarWeek;
