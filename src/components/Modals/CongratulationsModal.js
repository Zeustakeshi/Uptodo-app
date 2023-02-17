import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { medalIcon } from "../../../assets";
import ModalBase from "./ModalBase";

const CongratulationsModal = ({ modalVisible, setModalVisible }) => {
    const handleGetTodoCoin = () => {
        setModalVisible(false);
    };
    return (
        <ModalBase
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            style={{ borderRadius: 12 }}
        >
            <View className=" relative w-[300px] py-5 overflow-hidden rounded-xl">
                <View className=" absolute -top-[60%] left-0 w-full h-full bg-primary rounded-full"></View>
                <Image
                    source={medalIcon}
                    className="mt-4 w-[150px] h-[150px] mx-auto"
                    resizeMode="contain"
                ></Image>
                <View className="justify-center my-4">
                    <Text className="text-primary-pink2 text-center text-2xl font-bold">
                        Congratulations
                    </Text>
                    <View className="p-3">
                        <Text className="text-sm text-text-color text-center font-medium">
                            You have earned a TodoCoin for completing your focus
                            session. Keep up the good work and continue
                            collecting more TodoCoins to boost your
                            productivity!
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={handleGetTodoCoin}
                    className="border border-primary mx-auto rounded-xl"
                >
                    <View className="flex-row justify-between items-center px-4 py-2 gap-x-2">
                        <Text className="text-xl font-bold text-primary rounded-xl">
                            Get
                        </Text>
                        <SimpleLineIcons
                            name="energy"
                            size={24}
                            color="#BF88EC"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </ModalBase>
    );
};

export default CongratulationsModal;
