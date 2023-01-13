import React, { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import {
    MaterialIcons,
    MaterialCommunityIcons,
    Feather,
    Ionicons,
} from "@expo/vector-icons";
const AddTaskModal = ({ buttonShow = () => {} }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            {buttonShow(setModalVisible)}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View className="flex-1 justify-end">
                    <Pressable
                        className="flex-1"
                        onPress={() => setModalVisible(false)}
                    ></Pressable>
                    <View
                        className="h-[65%] bg-white opacity-100 rounded-tr-3xl rounded-tl-3xl"
                        style={styles.shadow}
                    >
                        <View className="p-6">
                            <Text className="text-xl font-bold text-text-color">
                                Add Task
                            </Text>
                            <View className="m-4">
                                <TextInput
                                    selectionColor="#6651f0"
                                    className="px-5 py-2 border border-gray-200 rounded-md focus:border-primary"
                                    placeholder="Enter your task"
                                />
                                <TextInput
                                    selectionColor="#6651f0"
                                    className="mt-4 px-5 py-2 border border-gray-200 rounded-md focus:border-primary"
                                    placeholder="Description"
                                />
                            </View>
                            <View className="flex-row w-full justify-between">
                                <View className="flex-row">
                                    <TouchableOpacity className="p-3">
                                        <MaterialIcons
                                            name="timer"
                                            size={24}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity className="p-3">
                                        <MaterialCommunityIcons
                                            name="tag-heart-outline"
                                            size={24}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity className="p-3">
                                        <Feather
                                            name="flag"
                                            size={24}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity className="p-3">
                                    <Ionicons
                                        name="send-outline"
                                        size={24}
                                        color="#6651f0"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
});

export default AddTaskModal;
