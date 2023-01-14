import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LayoutWrapper from "../../components/Layout/LayoutWrapper";
import EmptyTask from "../../components/Task/EmptyTask";
import { fakeImg } from "../../const";

const HomeScreen = () => {
    const navigation = useNavigation();
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
                        source={{ uri: fakeImg }}
                        className="w-[42px] h-[42px] rounded-full"
                    />
                </TouchableOpacity>
            </View>
            {/* Content */}
            <View className="flex-1">
                <EmptyTask></EmptyTask>
            </View>
        </LayoutWrapper>
    );
};

export default HomeScreen;
