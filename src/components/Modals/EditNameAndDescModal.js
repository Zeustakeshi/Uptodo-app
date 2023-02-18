import React, { memo, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setTaskNameAndDesc } from "../../redux/slice/tasks/tasksSlice";

import ModalPoup2 from "./ModalPoup2";

const EditNameAndDescModal = ({ oldData, buttonShow = () => {} }) => {
    const [inputName, setInputName] = useState(oldData?.name || "");
    const [inputDesc, setInputDesc] = useState(oldData?.desc || "");

    const dispatch = useDispatch();

    const handleSave = (setModalVisible) => {
        const newData = {
            ...oldData,
            name: inputName.trim() !== "" ? inputName.trim() : oldData.name,
            desc: inputDesc.trim() != "" ? inputDesc.trim() : oldData.desc,
        };
        dispatch(setTaskNameAndDesc(newData));
        setModalVisible(false);
    };

    return (
        <ModalPoup2
            buttonShow={buttonShow}
            title={
                <Text className="p-4 text-text-color text-center text-base font-normal">
                    Edit Task Name
                </Text>
            }
        >
            {(setModalVisible) => (
                <View className="p-6">
                    <View className="my-4">
                        <TextInput
                            selectionColor="#6651f0"
                            className="px-5 py-2 border border-gray-200 rounded-md focus:border-primary"
                            placeholder="Enter new task name"
                            value={inputName}
                            onChangeText={(text) => setInputName(text)}
                        />
                        <TextInput
                            selectionColor="#6651f0"
                            className="mt-4 px-5 py-2  border-gray-200 rounded-md border focus:border-primary"
                            placeholder="New description"
                            value={inputDesc}
                            onChangeText={(text) => setInputDesc(text)}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => handleSave(setModalVisible)}
                        className="flex-1 h-[48px] rounded justify-center items-center bg-primary2 "
                    >
                        <Text className="p-3 text-white text-base font-normal">
                            Update
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </ModalPoup2>
    );
};

export default memo(EditNameAndDescModal);
