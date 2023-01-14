import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {
    MaterialIcons,
    MaterialCommunityIcons,
    Feather,
    Ionicons,
} from "@expo/vector-icons";
import ModalPoup1 from "./ModalPoup1";
import CategoryModal from "./CategoryModal";
import PriorityModal from "./PriorityModal";
import TimeModal from "./TimeModal";

const AddTaskModal = ({ buttonShow = () => {} }) => {
    return (
        <ModalPoup1 buttonShow={buttonShow}>
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
                        {/* timer */}
                        <TimeModal
                            modes={["date", "time"]}
                            buttonShow={(setModalVisible) => (
                                <TouchableOpacity
                                    onPress={() => setModalVisible(true)}
                                    className="p-3"
                                >
                                    <MaterialIcons
                                        name="timer"
                                        size={24}
                                        color="black"
                                    />
                                </TouchableOpacity>
                            )}
                        />

                        {/* Category */}
                        <CategoryModal
                            buttonShow={(setModalVisible) => (
                                <TouchableOpacity
                                    className="p-3"
                                    onPress={() => setModalVisible(true)}
                                >
                                    <MaterialCommunityIcons
                                        name="tag-heart-outline"
                                        size={24}
                                        color="black"
                                    />
                                </TouchableOpacity>
                            )}
                        />
                        {/* Priority */}
                        <PriorityModal
                            buttonShow={(setModalVisible) => (
                                <TouchableOpacity
                                    onPress={() => setModalVisible(true)}
                                    className="p-3"
                                >
                                    <Feather
                                        name="flag"
                                        size={24}
                                        color="black"
                                    />
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    {/* send */}
                    <TouchableOpacity className="p-3">
                        <Ionicons
                            name="send-outline"
                            size={24}
                            color="#6651f0"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ModalPoup1>
    );
};

export default AddTaskModal;
