import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import { teamwork } from "../../../assets";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import TaskItem from "../../components/Task/TaskItem";

const FocusScreen = () => {
    const { tasks } = useSelector((state) => state.tasks);
    const uncompleteTasks = tasks.filter((task) => !task.isCompleted);
    const navigation = useNavigation();

    return (
        <LayoutWrapper
            style={{ position: "relative" }}
            showNavigate
            navMiddleButton={
                <Animatable.View
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    className="w-16 h-16 bg-primary rounded-full justify-center items-center"
                >
                    <FontAwesome name="play-circle" size={40} color="#ffff" />
                </Animatable.View>
            }
            navOnPressMidleButton={() => navigation.navigate("MainFocus")}
        >
            <View className="py-4 flex-row justify-between items-center">
                <Text className="font-medium text-xl">Focus Mode</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("FocusSetting")}
                >
                    <AntDesign name="setting" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="mb-20">
                    <Animatable.Image
                        animation="rubberBand"
                        className="w-[250px] h-[250px] mx-auto my-5"
                        source={teamwork}
                        resizeMode="contain"
                    />
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
