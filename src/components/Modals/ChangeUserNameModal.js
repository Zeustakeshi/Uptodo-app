import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../../redux/slice/user/userSlice";
import ModalPoup2 from "./ModalPoup2";

const ChangeUserNameModal = ({ buttonShow = () => {} }) => {
    const { userName } = useSelector((state) => state.user);
    const [inputName, setInputName] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (userName) {
            setUserName(userName);
        }
    }, []);

    // hanlder
    const handleSave = (setModalVisible) => {
        if (inputName.trim() !== "") {
            dispatch(setUserName(inputName));
        }
        setModalVisible(false);
    };

    const handleCancel = (setModalVisible) => {
        setModalVisible(false);
    };

    return (
        <ModalPoup2
            buttonShow={buttonShow}
            title={
                <Text className="p-4 text-text-color text-center text-base font-normal">
                    Change Account Name
                </Text>
            }
        >
            {(setModalVisible) => (
                <View className="p-6">
                    <View className="my-4">
                        <TextInput
                            selectionColor="#6651f0"
                            className="px-5 py-2 border border-gray-200 rounded-md focus:border-primary"
                            placeholder="Enter new account name"
                            value={inputName}
                            onChangeText={(text) => setInputName(text)}
                        />
                    </View>

                    <View className="flex-row gap-x-20 justify-between items-center">
                        <TouchableOpacity
                            onPress={() => handleCancel(setModalVisible)}
                            className="flex-1 h-[48px] rounded justify-center items-center "
                        >
                            <Text className="p-3 text-primary text-base font-normal">
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleSave(setModalVisible)}
                            className="flex-1 h-[48px] rounded justify-center items-center bg-primary2 "
                        >
                            <Text className="p-2 text-white text-base font-normal">
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ModalPoup2>
    );
};

export default ChangeUserNameModal;
