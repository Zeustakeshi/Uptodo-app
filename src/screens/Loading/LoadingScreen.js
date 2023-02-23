import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { loadFocusSetting, loadSetting } from "../../redux/slice/App/appSlice";
import {
    createHabitList,
    updateHabitList,
} from "../../redux/slice/habits/habitsSlice";
import { setTasks, updateTasks } from "../../redux/slice/tasks/tasksSlice";

const LoadingScreen = () => {
    const navigation = useNavigation();
    const userInfo = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadFocusSetting());
        dispatch(loadSetting());
    }, []);

    useEffect(() => {
        (async () => {
            const appData = await AsyncStorage.getItem("isFirstLauched");
            if (appData === null) {
                await AsyncStorage.setItem("isFirstLauched", "false");
                navigation.reset({
                    index: 1,
                    routes: [{ name: "Welcome" }],
                });
            } else {
                if (userInfo.isLogin) {
                    const tasks = await AsyncStorage.getItem("tasks");
                    if (tasks) {
                        dispatch(updateTasks(JSON.parse(tasks)));
                    }
                    const keys = await AsyncStorage.getAllKeys();
                    if (keys.length != 0) {
                        const values = await AsyncStorage.multiGet(
                            keys.filter((key) => key.includes("habit-"))
                        );
                        const habits = values.map((value) => {
                            return JSON.parse(value[1]);
                        });
                        dispatch(createHabitList(habits));
                    }
                    navigation.reset({
                        index: 1,
                        routes: [{ name: "Home" }],
                    });
                } else {
                    navigation.reset({
                        index: 1,
                        routes: [{ name: "Login" }],
                    });
                }
            }
        })();
    }, []);

    return (
        <LayoutWrapper>
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#6651f0" />
            </View>
        </LayoutWrapper>
    );
};

export default LoadingScreen;
