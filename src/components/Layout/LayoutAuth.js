import React from "react";
import { TouchableOpacity, View } from "react-native";
import LayoutWrapper from "./LayoutWrapper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const LayoutAuth = ({ children }) => {
    const navigation = useNavigation();
    return (
        <LayoutWrapper>
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
            <View className="flex-1">{children}</View>
        </LayoutWrapper>
    );
};

export default LayoutAuth;
