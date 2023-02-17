import React from "react";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import CountTime from "../../components/CountTime/CountTime";
import CountTime2 from "../../components/CountTime/CountTime2";
import LayoutAuth from "../../components/Layout/LayoutAuth";

const FocusMainScreen = () => {
    return (
        <LayoutAuth title="Focuse">
            <CountTime
                desc={
                    <View className="my-5">
                        <Text className="text-gray-500 font-semibold text-center">
                            While your focus mode is on, all of your
                            notifications will be off
                        </Text>
                        <Text className="block text-center p-2 text-xs text-gray-400 leading-relaxed">
                            The default focus time is 60 minutes, but you can
                            change it at any time in the settings.
                        </Text>
                    </View>
                }
            ></CountTime>
        </LayoutAuth>
    );
};

export default FocusMainScreen;
