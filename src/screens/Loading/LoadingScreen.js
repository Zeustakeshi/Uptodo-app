import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useDispatch } from "react-redux";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import { loadFocusSetting, loadSetting } from "../../redux/slice/App/appSlice";
import { createHabitList } from "../../redux/slice/habits/habitsSlice";
import { updateTasks } from "../../redux/slice/tasks/tasksSlice";
import { updateUserInfo } from "../../redux/slice/user/userSlice";

const LoadingScreen = () => {
    const navigation = useNavigation();
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
                const user = await AsyncStorage.getItem("user");
                let userInfo = { isLogin: false };
                if (user) {
                    userInfo = JSON.parse(user);
                }
                if (userInfo.isLogin) {
                    const tasks = await AsyncStorage.getItem("tasks");
                    dispatch(updateUserInfo(userInfo));
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
