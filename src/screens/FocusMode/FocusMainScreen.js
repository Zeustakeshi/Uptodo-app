import React from "react";
import { useState } from "react";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import CountTime from "../../components/CountTime/CountTime";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import CongratulationsModal from "../../components/Modals/CongratulationsModal";

const FocusMainScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <LayoutAuth title="Focus">
            <CountTime
                defaultFocusTime={0.2}
                defaultRelaxTime={0.2}
                onTimeEnd={() => {
                    setModalVisible(true);
                }}
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
            <CongratulationsModal
                title="chuc mung"
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            ></CongratulationsModal>
        </LayoutAuth>
    );
};

export default FocusMainScreen;
