import React from "react";
import { View, Text, Image } from "react-native";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import Nav from "../../components/Nav";
import EmptyTask from "../../components/EmptyTask";
import { fakeImg } from "../../const";

const HomeScreen = () => {
    return (
        <LayoutWrapper showNavigate={true}>
            {/* Header */}
            <View className="flex-row justify-between items-center">
                <Text className="text-xl font-semibold text-text-color">
                    Home
                </Text>
                <Image
                    source={{ uri: fakeImg }}
                    className="w-[42px] h-[42px] rounded-full"
                />
            </View>
            {/* Content */}
            <View className="flex-1">
                <EmptyTask></EmptyTask>
            </View>
        </LayoutWrapper>
    );
};

export default HomeScreen;
