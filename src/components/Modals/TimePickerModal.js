import React from "react";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ModalBase from "./ModalBase";

const TimePickerModal = ({
    modalVisible,
    setModalVisible,
    timeOption = [],
    onSave = () => {},
    title = "Time",
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSave = () => {
        onSave(timeOption[currentIndex]);
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    const updateCurrIndex = ({ nativeEvent }) => {
        const contentOffsetY = nativeEvent.contentOffset.y;
        setCurrentIndex(Math.floor(contentOffsetY / 80));
    };

    return (
        <ModalBase
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            style={{ borderRadius: 8 }}
        >
            <View className="p-5 min-w-[250px]  justify-between">
                <Text className="mt-4 text-xl text-primary text-center font-bold">
                    {title}
                </Text>
                <View className="my-10">
                    <FlatList
                        className="w-full h-[80px]  border-b border-t border-t-gray-300 border-b-gray-300 "
                        data={timeOption}
                        renderItem={({ item }) => (
                            <TouchableOpacity className="w-full h-[80px] justify-center items-center">
                                <Text className="flex-row justify-center items-center text-lg font-bold text-primary ">
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                        showsVerticalScrollIndicator={false}
                        pagingEnabled
                        bounces={false}
                        keyExtractor={(item, index) => index}
                        onMomentumScrollEnd={updateCurrIndex}
                    />
                </View>
                <View className="flex-row justify-between items-center gap-x-2">
                    <TouchableOpacity
                        onPress={handleCancel}
                        className="border-primary"
                    >
                        <Text className="px-4 py-2 border border-primary rounded-lg text-base font-bold text-primary">
                            Cancel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSave}
                        className="border-primary"
                    >
                        <Text className="px-4 py-2 border bg-primary border-primary rounded-lg text-base font-bold text-white">
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ModalBase>
    );
};

export default TimePickerModal;
