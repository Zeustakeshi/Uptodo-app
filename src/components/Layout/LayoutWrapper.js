import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "../Nav";

const LayoutWrapper = ({
    style,
    children,
    navMiddleButton,
    showNavigate = false,
}) => {
    return (
        <SafeAreaView className={`flex-1 bg-white `}>
            <View className="flex-1 px-6 bg-white pt-2" style={style}>
                {children}
            </View>
            {showNavigate && <Nav middleButton={navMiddleButton} />}
        </SafeAreaView>
    );
};

export default LayoutWrapper;
