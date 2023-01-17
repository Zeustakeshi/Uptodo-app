import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { resetTasks, setTasks } from "../redux/slice/tasks/tasksSlice";
import { resetUserInfo, updateUserInfo } from "../redux/slice/user/userSlice";

import LayoutWrapper from "./Layout/LayoutWrapper";

const Test = () => {
    const [tasksInfo, setTasksInfo] = useState({
        uncomplete: [],
        completed: [],
    });

    const dispatch = useDispatch();

    const handleRegister = () => {
        dispatch(
            setTasks({
                uncomplete: ["task1", "task2", "task3"],
                completed: ["task cp 1", "task cp 2", "task cp3", "task cp 4"],
            })
        );

        const getTasks = async () => {
            const tasks = await AsyncStorage.getItem("tasks");
            if (tasks !== null) {
                setTasksInfo(JSON.parse(tasks));
            } else {
                setTasksInfo({
                    uncomplete: [],
                    completed: [],
                });
            }
        };
        getTasks();
    };
    const handleLogout = () => {
        dispatch(resetTasks());
        const getTasks = async () => {
            const tasks = await AsyncStorage.getItem("tasks");
            if (tasks !== null) {
                setTasksInfo(tasks);
            } else {
                setTasksInfo({
                    uncomplete: [],
                    completed: [],
                });
            }
        };
        getTasks();
    };

    // console.log(tasksInfo.completed);
    return (
        <LayoutWrapper>
            <View className="flex-1 justify-center items-center">
                <View className="flex-row gap-x-2 ">
                    <TouchableOpacity
                        onPress={handleRegister}
                        className="px-5 py-4 bg-blue-500 rounded-lg "
                    >
                        <Text className="font-medium text-base text-white">
                            register
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleLogout}
                        className="px-5 py-4 bg-blue-500 rounded-lg "
                    >
                        <Text className="font-medium text-base text-white">
                            logout
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="mt-10">
                    <View>
                        <Text>uncomplete</Text>
                        {tasksInfo?.uncomplete?.map((task, index) => {
                            return <Text key={index}>{task}</Text>;
                        })}
                    </View>
                    <View>
                        <Text>completed</Text>
                        {tasksInfo?.completed?.map((task, index) => {
                            return <Text key={index}>{task}</Text>;
                        })}
                    </View>
                </View>
            </View>
        </LayoutWrapper>
    );
};

export default Test;
