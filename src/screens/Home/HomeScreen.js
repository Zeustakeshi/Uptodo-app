import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import Avatar from "../../components/Avatar/Avatar";
import HabitWrapper from "../../components/Habits/HabitWrapper";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import AddTaskModal from "../../components/Modals/AddTaskModal";
import Search from "../../components/Search/Search";
import EmptyTask from "../../components/Task/EmptyTask";
import TaskWapper from "../../components/Task/TaskWapper";
import { fakeImg } from "../../const";

const HomeScreen = () => {
    const navigation = useNavigation();
    const { user, tasks, habits } = useSelector((state) => state);

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
                {/* <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                >
                    <Image
                        source={{ uri: user.avatar || fakeImg }}
                        className="w-[42px] h-[42px] rounded-full"
                    />
                </TouchableOpacity> */}
                <Avatar
                    width={42}
                    height={42}
                    onPress={() => navigation.navigate("Profile")}
                />
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
