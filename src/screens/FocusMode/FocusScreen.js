import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import * as Animatable from "react-native-animatable";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Task from "../../components/Task/Task";
import TaskList from "../../components/Task/TaskList";
import { useSelector } from "react-redux";
import TaskItem from "../../components/Task/TaskItem";
import { calendar, teamwork } from "../../../assets";
import { useNavigation } from "@react-navigation/native";

const FocusScreen = () => {
    const { tasks } = useSelector((state) => state.tasks);
    const uncompleteTasks = tasks.filter((task) => !task.isCompleted);
    const navigation = useNavigation();

    return (
        <LayoutWrapper
            style={{ position: "relative" }}
            showNavigate
            navMiddleButton={
                <View className=" bg-white -translate-y-6  w-20 h-20  border-t-[5px] border-r-[3px] border-l-[3px] border-primary2  rounded-full justify-center items-center">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("MainFocus")}
                    >
                        <Animatable.View
                            animation="pulse"
                            easing="ease-out"
                            iterationCount="infinite"
                            className="w-16 h-16 bg-primary rounded-full justify-center items-center"
                        >
                            <Text className="text-gray-50 font-semibold text-[25px]">
                                <FontAwesome
                                    name="play-circle"
                                    size={40}
                                    color="#ffff"
                                />
                            </Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            }
        >
            <View className="py-4 flex-row justify-between items-center">
                <Text className="font-medium text-xl">Focus Mode</Text>
                <TouchableOpacity>
                    <AntDesign name="setting" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="mb-20">
                    <Image
                        className="w-[250px] h-[250px] mx-auto my-5"
                        source={teamwork}
                        resizeMode="contain"
                    ></Image>
                    <Text className="my-5 text-lg text-gray-500 text-center">
                        Disconnect to connect and stay focused. Turn off your
                        devices, tune in to the world around you, and trust the
                        process. The results will speak for themselves.
                    </Text>
                    {uncompleteTasks.length > 0 ? (
                        <View className=" mt-5">
                            <Text className="font-semibold text-base  text-text-color my-5">
                                Your have
                                <Text className="font-bold text-primary">
                                    {" "}
                                    {uncompleteTasks.length}{" "}
                                </Text>
                                uncomplete tasks today{" "}
                                <Text className="text-primary font-bold">
                                    focus and complete now
                                </Text>
                            </Text>
                            <View className="h-auto">
                                {uncompleteTasks?.map((task, index) => {
                                    return (
                                        <TaskItem
                                            key={task.id}
                                            data={task}
                                            allowPress={false}
                                        />
                                    );
                                })}
                            </View>
                        </View>
                    ) : (
                        <View></View>
                    )}
                </View>
            </ScrollView>
        </LayoutWrapper>
    );
};

export default FocusScreen;
