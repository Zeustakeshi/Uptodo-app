import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { timeFomat } from "../../const";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const today = new Date();
const TaskItem = ({ data }) => {
    const { name, time, categrory, priority, isCompleted } = data;

    const [completed, setCompleted] = useState(isCompleted);

    const handlePress = () => {
        setCompleted((prev) => !prev);
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            className={`flex-1 ${completed && "opacity-50"}`}
        >
            <View className="p-3 flex-row justify-start items-center bg-gray-50 mb-3 rounded-lg">
                {/* icon circle */}
                {completed ? (
                    <FontAwesome5
                        name="check-circle"
                        size={24}
                        color="#8875FF"
                    />
                ) : (
                    <Entypo name="circle" size={24} color="#8875FF" />
                )}
                <View className="ml-3 items-start flex-1 gap-y-2">
                    <Text className="text-base font-medium" numberOfLines={1}>
                        {name}
                    </Text>
                    <View className="flex-row justify-between items-center w-full">
                        {/* time */}
                        <Text className="text-xs font-normal text-gray-500">
                            {timeFomat(time.end)}
                        </Text>
                        <View className="flex-1 flex-row justify-end items-center gap-x-2">
                            {/* categrory */}
                            <View className=" overflow-hidden flex-row justify-between items-center gap-x-1 px-1 pr-2 py-1 bg-[#809CFF] rounded-md">
                                {categrory.icon(10)}
                                <Text
                                    numberOfLines={1}
                                    className="max-w-[50px] text-[10px] text-gray-200"
                                >
                                    {categrory.title}
                                </Text>
                            </View>
                            {/* priority */}
                            <View className="flex-row justify-center items-center gap-x-1 px-1 pr-2 py-1 border border-primary2 rounded-lg">
                                <MaterialIcons
                                    name="outlined-flag"
                                    size={14}
                                    color="#2A2B4B"
                                />
                                <Text className="text-[10px]">{priority}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default TaskItem;
