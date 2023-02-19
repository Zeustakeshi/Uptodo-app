import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CalendarDay from "./CalendarDay";

const CalendarMonth = ({
    showControl,
    onSave = () => {},
    onCancel = () => {},
}) => {
    const dataRef = useRef(new Array(31).fill(0));

    const handleAddChoosesDay = (index) => {
        dataRef.current[index] = 1;
    };

    const handleRemoveChoosesDay = (index) => {
        dataRef.current[index] = 0;
    };

    const handleSave = () => {
        const results = dataRef.current
            .map((item, index) => {
                if (item === 1) return index;
            })
            .filter((item) => item !== undefined);
        dataRef.current.fill(0);
        onSave(results);
    };

    const handleCancel = () => {
        onCancel();
        dataRef.current.fill(0);
    };

    return (
        <View className="w-full">
            <View className="flex-row w-full flex-wrap">
                {dataRef.current.map((day, index) => {
                    return (
                        <CalendarDay
                            key={index}
                            label={index + 1}
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
                        onPress={handleCancel}
                    >
                        <Text>cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="px-2 py-1"
                        onPress={handleSave}
                    >
                        <Text className="font-medium text-primary">save</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default CalendarMonth;
