import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "../Nav";

const LayoutWrapper = ({
    style,
    children,
    navMiddleButton,
    navCustomMidleButton,
    navOnPressMidleButton = () => {},
    showNavigate = false,
}) => {
    return (
        <SafeAreaView className={`flex-1 bg-white `}>
            <View className="flex-1 px-5  bg-white pt-2" style={style}>
                <View className="flex-1 mx-auto w-full">{children}</View>
            </View>
            {showNavigate && (
                <Nav
                    middleButton={navMiddleButton}
                    customMidleButton={navCustomMidleButton}
                    onPressMidleButton={navOnPressMidleButton}
                />
            )}
        </SafeAreaView>
    );
};

export default LayoutWrapper;
