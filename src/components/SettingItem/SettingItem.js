import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const SettingItem = ({
    icon = "",
    title = "",
    textStyle,
    buttonStyle,
    to = "",
    isLoading = false,
    ...props
}) => {
    const navigation = useNavigation();
    const gotoWebview = () => {
        if (to === "") return;
        navigation.navigate("Webview", { pram: to });
    };
    return (
        <>
            <TouchableOpacity
                onPress={gotoWebview}
                className="flex-row py-3 gap-x-3 justify-start items-center "
                style={buttonStyle}
                {...props}
            >
                {isLoading ? (
                    <ActivityIndicator size="small" color={"#6651f0"} />
                ) : (
                    icon
                )}
                <Text
                    className=" font-normal text-text-color"
                    style={textStyle}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default SettingItem;
