import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import HabitWrapper from "../../components/Habits/HabitWrapper";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import AddTaskModal from "../../components/Modals/AddTaskModal";
import Search from "../../components/Search/Search";
import EmptyTask from "../../components/Task/EmptyTask";
import TaskWapper from "../../components/Task/TaskWapper";
import { fakeImg } from "../../const";
import { createHabitList } from "../../redux/slice/habits/habitsSlice";
import { updateTasks } from "../../redux/slice/tasks/tasksSlice";

const HomeScreen = () => {
    const navigation = useNavigation();
    const { user, tasks, habits } = useSelector((state) => state);

    const dispatch = useDispatch();
    // useEffect(() => {
    //     (async () => {
    //         const tasks = await AsyncStorage.getItem("tasks");
    //         if (tasks) {
    //             dispatch(updateTasks(JSON.parse(tasks)));
    //         }
    //         const keys = await AsyncStorage.getAllKeys();
    //         if (keys.length != 0) {
    //             const values = await AsyncStorage.multiGet(
    //                 keys.filter((key) => key.includes("habit-"))
    //             );
    //             const habits = values.map((value) => {
    //                 return JSON.parse(value[1]);
    //             });
    //             dispatch(createHabitList(habits));
    //         }
    //     })();
    // }, []);

    return (
        <LayoutWrapper
            showNavigate={true}
            navCustomMidleButton={
                <AddTaskModal
                    buttonShow={(setModalVisible) => (
                        <View className="w-[80px] h-[80px] border-t-[5px] border-r-[3px] border-l-[3px] -translate-y-6 border-primary2 bg-white  rounded-full justify-center items-center">
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                                className="justify-center items-center w-[60px] h-[60px] rounded-full "
                            >
                                <Animatable.View
                                    animation="pulse"
                                    easing="ease-out"
                                    iterationCount="infinite"
                                    className="w-16 h-16 bg-primary rounded-full justify-center items-center"
                                >
                                    <Animatable.View
                                        animation="jello"
                                        easing="ease"
                                        iterationCount="infinite"
                                    >
                                        <Entypo
                                            name="circle-with-plus"
                                            size={32}
                                            color="white"
                                        />
                                    </Animatable.View>
                                </Animatable.View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            }
        >
            {/* Header */}
            <View className="flex-row justify-between items-center">
                <Text className="text-xl font-semibold text-text-color">
                    Home
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                >
                    <Image
                        source={{ uri: user.avatar || fakeImg }}
                        className="w-[42px] h-[42px] rounded-full"
                    />
                </TouchableOpacity>
            </View>
            {/* Content */}

            {tasks.tasks.length > 0 || habits.habitsList.length > 0 ? (
                <ScrollView showsVerticalScrollIndicator={false} className="">
                    <Search />
                    {habits.habitsList.length > 0 && <HabitWrapper />}
                    {tasks.tasks.length > 0 && <TaskWapper />}
                </ScrollView>
            ) : (
                <EmptyTask />
            )}
        </LayoutWrapper>
    );
};

export default HomeScreen;
