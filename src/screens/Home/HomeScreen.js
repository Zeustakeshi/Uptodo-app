import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import Task from "../../components/Task/Task";
import { fakeImg } from "../../const";

const HomeScreen = () => {
    const navigation = useNavigation();
    const { avatar } = useSelector((state) => state.user);

    return (
        <LayoutWrapper showNavigate={true}>
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
