import { Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import AddTaskModal from "../../components/Modals/AddTaskModal";
import Task from "../../components/Task/Task";
import { fakeImg } from "../../const";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
    const navigation = useNavigation();
    const { avatar } = useSelector((state) => state.user);

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
                        source={{ uri: avatar || fakeImg }}
                        className="w-[42px] h-[42px] rounded-full"
                    />
                </TouchableOpacity>
            </View>
            {/* Content */}
            <View className="flex-1">
                <Task />
            </View>
        </LayoutWrapper>
    );
};

export default HomeScreen;
