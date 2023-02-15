import React from "react";
import { useRef } from "react";
import { Linking, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import LayoutWrapper from "../Layout/LayoutWrapper";
import ModalPoup1 from "./ModalPoup1";

const VerifyModal = ({ buttonShow = () => {} }) => {
    const user = useSelector((state) => state.user);

    return (
        <ModalPoup1 height={100} buttonShow={buttonShow}>
            {(setModalVisible) => (
                <LayoutWrapper>
                    <View className="flex-1 justify-center">
                        <Text className="text-center text-3xl m-3">
                            Hi{" "}
                            <Text className="font-bold">
                                {user.userName || "user"}
                            </Text>
                            ,
                        </Text>
                        <Text className="text-center text-2xl">
                            Just a friendly reminder to verify your email
                            address.
                        </Text>
                        <Text className="text-center m-4 text-gray-500 text-base">
                            For security reasons, please help us by verifying
                            your email address to change your password
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(false);
                            }}
                            className=" relative flex-row mt-5 bg-primary2 px-6 py-3 h-[48px] rounded justify-center items-center"
                        >
                            <Text className="font-normal text-base text-white">
                                Verify email
                            </Text>
                        </TouchableOpacity>
                    </View>
                </LayoutWrapper>
            )}
        </ModalPoup1>
    );
};

export default VerifyModal;
