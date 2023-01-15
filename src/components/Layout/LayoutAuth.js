import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LayoutWrapper from "./LayoutWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const LayoutAuth = ({ title, children }) => {
    const navigation = useNavigation();
    return (
        <LayoutWrapper>
            <View className="flex-row justify-start items-center gap-x-2">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="py-2"
                >
                    <Ionicons
                        name="md-chevron-back-outline"
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
                {title && (
                    <Text className="text-xl font-semibold text-text-color">
                        {title}
                    </Text>
                )}
            </View>
            <View className="flex-1">{children}</View>
        </LayoutWrapper>
    );
};

export default LayoutAuth;
