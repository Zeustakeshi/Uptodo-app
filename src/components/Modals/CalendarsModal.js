import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import ModalPoup2 from "./ModalPoup2";
import { AntDesign, Feather } from "@expo/vector-icons";
import Calendars from "../Calendars/Calendars";

const CalendarsModal = ({ buttonShow = () => {} }) => {
    return (
        <ModalPoup2 buttonShow={buttonShow}>
            {(setModalVisible) => (
                <View className="flex-1 py-4 px-4">
                    <Calendars />
                    <View className="mt-5 flex-row gap-x-5 justify-center items-center">
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            className="flex-1 h-[48px] rounded justify-center items-center "
                        >
                            <Text className="p-3 text-primary text-base font-normal">
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            className="flex-1 h-[48px] rounded justify-center items-center bg-primary2 "
                        >
                            <Text className="p-3 text-white text-base font-normal">
                                Choose Time
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ModalPoup2>
    );
};

export default CalendarsModal;
